
const Error = ({ message = 'Something went wrong!', code = 500, status = 'Fail', ...args }) => { 
  return { message, code, status, ...args } 
}

const Success = ({ message = 'Successfully..', code = 201, status = 'OK', ...args }) => { 
  return { message, code, status, ...args } 
}

module.exports = {
  Error,
  Success,
}