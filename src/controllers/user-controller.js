const registerUser =(req, res)=>{
  res.json({message: 'Register user'})
}
const loginUser =(req, res)=>{
  res.json({message: 'User Login'})
}

const getUser =(req, res)=>{
  res.json({message: 'Get user'})
}

module.exports = {
  registerUser, loginUser, getUser
}