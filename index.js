'use strict'

//Imports
var mongoose = require('mongoose');
var app = require('./app');
const PORT = process.env.PORT || 6800;
const URL = process.env.URL || 'mongodb://127.0.0.1/pizzeriabd'


mongoose.Promise = global.Promise;
//Conexion a la base de datos
mongoose.connect(URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("server listening on port " + PORT);
    });
})
.catch((err)=>{
    console.log(err);
})