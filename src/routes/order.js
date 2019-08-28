const express = require('express')
const Route = express.Router()
const controller = require('../controllers/order')
Route
    .get('/byidmitra/:idMitra', controller.getOrderIdMitra)
    .get('/selesai/', controller.getOrderSelesai)
    .get('/pending/', controller.getOrderPending)
    .get('/detail/:idOrder', controller.getOrderIdDetail)
    .post('/', controller.addOrder)
    // .delete('/:idCategory', controller.deleteCategory)
    // .patch('/:idCategory', controller.updateCategory)

module.exports = Route