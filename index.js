/*var app = require('./config/custom-express')();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
   console.log('Servidor rodando na porta '+PORT+' .');
});*/

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, function () {
        const host = server.address().address;
const port = server.address().port;

console.log("Example app listening at http://"+ host +":"+ port +"");
});

