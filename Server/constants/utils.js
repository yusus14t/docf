const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const multer = require('multer');
const ftp = require("basic-ftp");
const fs = require("fs");
const path = require('path');

const Error = ({message = 'Something went wrong!', code = 500, status = 'Fail', ...args}) => { 
  return { message, code, status, ...args } 
}

 const Success = ({message = 'Successfully..', code = 200, status = 'OK', ...args}) => { 
  return { message, code, status, ...args } 
}

 const encryptPassword = async ( password ) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash( password, salt )
}

 const comparePassword = async (password, hashPassword) => await bcrypt.compare(password, hashPassword)

 const createToken = (id) => jwt.sign({_id: id}, process.env.JWT_SECRET)

 const randomOtp = () => ~~(1000 + Math.random() * 9000)

 const smsService = async (sms, phone) => {
    let payload = {
      "route" : "v3",
      "sender_id" : "FTWSMS",
      "message" : sms,
      "language" : "english",
      "flash" : 0,
      "numbers" : phone,
    }

    try{
      let data = await axios.post(process.env.FAST2SMS_URL, payload,  {
        headers: {
          'authorization': process.env.FAST2SMS_KEY,
          'Content-Type': "application/x-www-form-urlencoded",
          'Cache-Control': "no-cache",
        }
      })

      return data?.data
    } catch(error){ console.error(error) }

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


const uploadToBucket = async ( filename ) =>  {

  if( process.env.ENVIRONMENT === 'development' ) return filename

  const client = new ftp.Client();
  client.ftp.verbose = true; 

  try {
    await client.access({
      host: process.env.FTP_HOST, 
      user: process.env.FTP_USERNAME, 
      password: process.env.FTP_PASSWORD,
      secure: false,
    });

    const remotePath = process.env.ROOT_DIRECTORY
    const remoteFileName = filename;

    const localFilePath = path.join(__dirname, '..', '/uploads', filename)
    const localFile = fs.createReadStream(localFilePath);
    await client.uploadFrom(localFile, remotePath+remoteFileName );

    fs.unlinkSync(localFilePath)
    return filename
  } catch (err) {
    console.error("Error uploading image:", err);
    return err
  } finally {
    client.close();
  }
}


module.exports = {
  Error, Success,
  encryptPassword, comparePassword,
  createToken,
  Errors,
  randomOtp,
  smsService,
  upload,
  uploadToBucket,
}
