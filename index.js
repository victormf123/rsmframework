var app = require('./config/custom-express')();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
   console.log('Servidor rodando na porta '+PORT+' .');
});

