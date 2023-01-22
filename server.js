require('dotenv').config()

const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;

require('./src/config/db')

const books = require('./src/routes/books.js')
const user = require('./src/routes/user')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/books', books)
app.use('/user', user)

app.get('/', (req, res)=>{
  res.send('Hi World!')
});





app.listen( PORT, () => console.log(`server running on port ${PORT}`))