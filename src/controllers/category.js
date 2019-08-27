const categoryModel = require('../models/category')
const miscHelper = require('../helpers/helper')

module.exports = {
    getCategory: (req, res) => {
        categoryModel.getCategory()
            .then((result) => {
                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    getCategoryById: (req, res) => {
        const idCategory = req.params.idCategory
        categoryModel.getByIdCategory(idCategory)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    addCategory: (req, res) => {
        const data = {
            catName: req.body.catName,
            image: null
        }
        categoryModel.addCategory(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    deleteCategory: (req, res) => {
        const idCategory = req.params.idCategory
        categoryModel.deleteCategory(idCategory)
            .then((resultData) => {
                const result = resultData[0]
                miscHelper.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    },
    updateCategory: (req, res) => {
        const idCategory = req.params.idCategory
        const data = {
            catName: req.body.catName,
            idSub: req.body.idSub,
            image: null
        }
        categoryModel.updateCategory(idCategory, data)
            .then(() => {
                miscHelper.response(res, data)
            })
            .catch((error) => {
                console.log(error)
                miscHelper.response(res, '', 400, error)
            })
    }
}