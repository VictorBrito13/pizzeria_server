'use strict'

//Imports
var express = require('express');
var router = express.Router();
var controllers = require('../controllers/controllers');


//Rutas
router.get('/test', controllers.test);
router.post('/savePedido', controllers.savePedido);
router.get('/getPedidos', controllers.getPedidos);
router.get('/pedido/:id', controllers.getPedido);
router.delete('/delete/:id', controllers.deletePedido);

//Exportar modulo
module.exports = router;