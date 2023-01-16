const mongoose = require('mongoose');
require('dotenv').config()

const connectionStr = process.env.mongoURI

mongoose.set('strictQuery', true)

mongoose.connect(connectionStr)


mongoose.connection.on('connected', ()=> console.log('connected!'))
mongoose.connection.on('error', ()=> console.log('error' + error))
mongoose.connection.on('disconnected', ()=> console.log('mongo disconnected!'))
