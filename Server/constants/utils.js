
const Error = ({ message = 'Something went wrong!', code = 500, status = 'Fail', ...args }) => { 
  return { message, code, status, ...args } 
}

module.exports = {
  Error,
}