var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hola Mundo');
});

app.listen(3000, function() {
    console.log('Estas en tu app en el puerto 3000.');
});
