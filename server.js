require('dotenv').config()

const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;

require('./src/config/db')


app.get('/', (req, res)=>{
  res.send('Hi World!')
});





app.listen( PORT, () => console.log(`server running on port ${PORT}`))