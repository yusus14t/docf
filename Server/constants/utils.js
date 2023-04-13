const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

 const Error = (message = 'Something went wrong!', code = 500, status = 'Fail', ...args) => { 
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

 const Errors = {
  common_error: 'Something went wrong!',
  invalid_confirmPassword: 'Confirm password are incorrect',
  invalid_password: 'Invalid Password',
}

module.exports = {
  Error, Success,
  encryptPassword, comparePassword,
  createToken,
  Errors
}
