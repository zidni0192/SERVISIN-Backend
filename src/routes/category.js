const express = require('express')
const Route = express.Router()
const controller = require('../controllers/category')
Route
    .get('/', controller.getCategory)
    .get('/:idCategory', controller.getCategoryById)
    .post('/', controller.addCategory)
    .delete('/:idCategory', controller.deleteCategory)
    .patch('/:idCategory', controller.updateCategory)

module.exports = Route