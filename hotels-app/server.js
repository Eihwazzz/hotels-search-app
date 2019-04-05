var express = require('express');
var path = require('path');
var app = express();

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'dist/hotels-app')));


app.listen(port);
console.log('Servidor ejecutandose en localhost, puerto: ' + port);