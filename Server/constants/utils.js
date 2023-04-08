const bcrypt = require('bcrypt');

const Error = ({ message = 'Something went wrong!', code = 500, status = 'Fail', ...args }) => { 
  return { message, code, status, ...args } 
}

const Success = ({ message = 'Successfully..', code = 201, status = 'OK', ...args }) => { 
  return { message, code, status, ...args } 
}

const encryptPassword = async ( password ) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash( password, salt )
}

module.exports = {
  Error, Success,
  encryptPassword,
}