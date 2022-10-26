'use strict'

//Imports
var mongoose = require('mongoose');
var app = require('./app');
var port = 6800;



mongoose.Promise = global.Promise;
//Conexion a la base de datos
mongoose.connect('mongodb://127.0.0.1/pizzeriabd')
.then(()=>{
    console.log("base de datos de la pizzería conectada exitosamente");
    app.listen(port, ()=>{
        console.log("servidor corriendo en el puerto " + port);
    });
})
.catch((err)=>{
    console.log(err);
})