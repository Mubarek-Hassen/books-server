const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')


const registerUser = asyncHandler(async (req, res)=>{
  const { name, email, password } = req.body

  if(!name || !email || !password){
    res.status(400)
    throw new Error('Please fill all fields!')
  }

  const userExists = await User.findOne({email})
  if (userExists){
    res.status(400)
    throw new Error('User already exist.')
  }

  // HASH PASSWORD

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create the user

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })
  if(user){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const loginUser = asyncHandler(async (req, res)=>{
  res.json({message: 'User Login'})
})

const getUser = asyncHandler(async (req, res)=>{
  res.json({message: 'Get user'})
})


module.exports = {
  registerUser, loginUser, getUser
}