/**
 * Created by matheus on 11/01/17.
 */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var exress_validator = require('express-validator');

module.exports = function (app) {
        var app = express();

        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        app.use(exress_validator());

        consign()
            .include('controllers')
            .then('persistencia')
            .then('servicos')
            .into(app);

        return app;
}