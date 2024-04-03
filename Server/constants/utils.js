const jwt = require('jsonwebtoken');
const axios = require('axios');
const multer = require('multer');
const ftp = require("basic-ftp");
const fs = require("fs");
const path = require('path');
const QRCode = require('qrcode');
const crypto = require('crypto')

const Error = ({ message = 'Something went wrong!', code = 500, status = 'Fail', ...args }) => {
  return { message, code, status, ...args }
}

const Success = ({ message = 'Successfully..', code = 200, status = 'OK', ...args }) => {
  return { message, code, status, ...args }
}

const encryptPassword = async (password) => {
}

const comparePassword = async (password, hashPassword) => ''

const createToken = (id) => jwt.sign({ _id: id }, process.env.JWT_SECRET)

const randomOtp = () => ~~(1000 + Math.random() * 9000)

const smsService = async (sms, phone) => {
  let payload = {
    // "route": "q",
    "route": "v3",
    "sender_id": "FTWSMS",
    "message": sms,
    "language": "english",
    "flash": 0,
    "numbers": phone,
  }

  try {
    let data = await axios.post(process.env.FAST2SMS_URL, payload, {
      headers: {
        'authorization': process.env.FAST2SMS_KEY,
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
      }
    })

    return data?.data
  } catch (error) { console.error(error) }

}

const Errors = {
  common_error: 'Something went wrong!',
  invalid_confirmPassword: 'Confirm password are incorrect',
  invalid_password: 'Invalid Password',
}

const multerStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `doctortime-${Date.now()}.${ext}`);
  },
});


const upload = multer({ storage: multerStorage })


const uploadToBucket = async ( filename, localPath, remotePath = process.env.ROOT_DIRECTORY ) => {
  // if (process.env.ENVIRONMENT === 'development') return filename
  
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USERNAME,
      password: process.env.FTP_PASSWORD,
      secure: false,
    });
    
    localPath = localPath || path.join(__dirname, '..', '/uploads', filename)
    const localFile = fs.createReadStream( localPath );

    await client.uploadFrom(localFile, remotePath + filename);
    fs.unlinkSync( localPath )
    return filename

  } catch (err) {
    console.error("Error uploading image:", err);
    return err
  } finally {
    client.close();
  }
}

const QRCodeGenerate = async (data, filename) => {
  try {
    let imagePath = path.join(__dirname, '..', 'uploads')
    QRCode.toFile(`${imagePath}/${filename}`, data, async (err) => {
      if (err) return console.log(err)
      
      await uploadToBucket(filename)
    })
  } catch (error) { console.log(error) }
}

class Payment {
  constructor(txnId, amount){
    this.amount = amount
    this.txnId = txnId
  }
  
  create_checksum = ( hostname ) => {
    console.log('hostname', hostname )
    let MERCHANT_KEY = process.env.MERCHANT_KEY_WEB
    let MERCHANT_ID = process.env.MERCHANT_ID_WEB

    if( hostname === "pvdhealth.in" ){
      MERCHANT_KEY = process.env.MERCHANT_KEY_APP
      MERCHANT_ID = process.env.MERCHANT_ID_APP
    }

    const orderData = {
      "merchantId": MERCHANT_ID,
      "merchantTransactionId": String(this.txnId),
      "merchantUserId": new Date().getTime(),
      "amount": this.amount*100,
      "redirectUrl": `${process.env.REDIRECT_SERVER_URL}/api/phonepay-status`,
      "redirectMode": "POST",
      "callbackUrl": `${process.env.REDIRECT_SERVER_URL}/api/phonepay-status`,
      "mobileNumber": "9999999999",
      "paymentInstrument": {
        "type": "PAY_PAGE"
      }
    };

    const b64Data = Buffer.from(JSON.stringify(orderData)).toString('base64')
    const checksum = crypto.createHash('sha256')
    .update(b64Data + '/pg/v1/pay' + MERCHANT_KEY)
    .digest('hex') + '###'+ process.env.KEY_INDEX
  
    return { b64Data, checksum }
  }


  create_payment = async function ( hostname ) {
    try {
      let { b64Data, checksum } = this.create_checksum( hostname )
      let check = await axios.post(process.env.URL, { request: b64Data }, { headers: { accept: 'application/json', 'Content-Type': 'application/json', 'X-VERIFY': checksum }} )
      return check
    }catch( error ){ return error }  
  }
}




module.exports = {
  Errors,
  upload,
  Error, Success,
  encryptPassword, comparePassword,
  createToken,
  randomOtp,
  smsService,
  uploadToBucket,
  QRCodeGenerate,
  Payment, 
}
