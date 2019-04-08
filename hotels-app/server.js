require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, 'dist/hotels-app')));


app.listen(port);
console.log('Servidor ejecutandose en localhost, puerto: ' + port);