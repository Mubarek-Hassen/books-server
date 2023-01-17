require('dotenv').config()

const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;

require('./src/config/db')

const books = require('./src/routes/books.js')

app.use('/books', books)

app.get('/', (req, res)=>{
  res.send('Hi World!')
});





app.listen( PORT, () => console.log(`server running on port ${PORT}`))