'use strict'

//Imports
var pedidos = require('../models/model');

var controllers = {
    test:(req, res)=>{
        return res.status(200).send({message: "metodo test"});
    },
    /* Guardar un pedido */
    savePedido:(req, res)=>{
        var pedidosModel = new pedidos();
        var data = req.body;

        pedidosModel.nameClient = data.nameClient;
        pedidosModel.phoneClient = data.phoneClient;
        pedidosModel.address = data.address;
        pedidosModel.CashToPay = data.CashToPay;
        pedidosModel.pedido = data.pedido;

        pedidosModel.save((err, pedidoStored)=>{
            if(err) return res.status(500).send({message: "Ha ocurrido un error", error:err});
            if(!pedidoStored) return res.status(404).send({message: "No existe el pedido"});
            return res.status(200).send({
                message: "Metodo savePedido",
                pedido: pedidoStored
            });
        });
    },
    /* Obtener los pedidos */
    getPedidos:(req,res) => {
        pedidos.find({}).exec((err, pedidos)=>{
            if(err) return res.status(500).send({
                message: "A ocurrido un error",
                error: err
            });
            if(!pedidos) res.status(404).send({message:"pedidos no encontrados"});
            return res.status(200).send({
                pedidos:pedidos
            });
        });
    },
    //Obtener un pedido
    getPedido:(req, res) => {
        var pedidoId = req.params.id;

        pedidos.findById(pedidoId, (err, pedido) => {
            if(err) return res.status(500).send({
                error: err
            });
            if(!pedido) return res.status(404).send({
                message:"parece que el pedido no existe"
            });

            return res.status(200).send({
                pedido:pedido
            });
        })
    },
    //Eliminar pedido
    deletePedido:(req, res) => {
        var pedidoId = req.params.id;
        pedidos.findByIdAndRemove(pedidoId, (err, project) => {
            if(err) return res.status(500).send({
                message:"ha ocurrido un error",
                error: err
            });
            if(!project) return res.status(404).send({
                message:"no se ha encontrado el pedido"
            });
            return res.status(200).send({
                projectDeleted: project
            });
        });
    }
}

//Exportar modulo
module.exports = controllers;