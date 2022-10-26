'use strict'

//Imports
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Model
var pedidosModel = Schema({
    nameClient:String,
    phoneClient:Number,
    address:String,
    CashToPay:Number,
    pedido:String
});

//Exportar modulo
module.exports = mongoose.model('pedidos', pedidosModel);