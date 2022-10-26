'use strict'

//Imports
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Fichero de rutas
var rutas = require('./routes/rutas');

//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rutas
app.use('/api', rutas);

//Exportacion del modulo
module.exports = app;