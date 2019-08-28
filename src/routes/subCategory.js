const express = require('express')
const Route = express.Router()
const controller = require('../controllers/subCategory')
Route
    .get('/', controller.getSubCategory)
    .get('/:idCat', controller.getSubCategoryById)
    .post('/', controller.addSubCategory)
    .delete('/:idSub', controller.deleteSubCategory)
    .patch('/:idSub', controller.updateSubCategory)

module.exports = Route