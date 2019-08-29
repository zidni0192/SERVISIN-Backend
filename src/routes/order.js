const express = require('express')
const Route = express.Router()
const controller = require('../controllers/order')
Route
    //Get Order by id Mitra Where Order Pending
    .get('/mitrapending/:idMitra', controller.getPendingIdMitra)
    .get('/mitraselesai/:idMitra', controller.getSelesaiIdMitra)

    .get('/userpending/:idUser', controller.getPendingIdUser)
    .get('/userselesai/:idUser', controller.getSelesaiIdUser)
    .get('/selesai/', controller.getOrderSelesai)
    .get('/pending/', controller.getOrderPending)
    .get('/detail/:idOrder', controller.getOrderIdDetail)
    .post('/', controller.addOrder)
    // .delete('/:idCategory', controller.deleteOrder)
    .patch('/:idOrder', controller.patchOrder)

module.exports = Route