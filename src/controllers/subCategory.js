const subCategoryModel = require('../models/subCategory')
const miscHelpers = require('../helpers/helper')

module.exports = {
    getSubCategory: (req, res) => {
        subCategoryModel.getSubCategory()
            .then((resultData) => {
                const result = resultData
                miscHelpers.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelpers.response(res, '', 400, error)
            })
    },
    getSubCategoryById: (req, res) => {
        const idSub = req.params.idSub
        subCategoryModel.getSubCategoryById(idSub)
            .then((resultData) => {
                const result = resultData[0]
                miscHelpers.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelpers.response(res, '', 400, error)
            })
    },
    addSubCategory: (req, res) => {
        const data = {
            subName: req.body.subName,
            price: req.body.price,
            image: null
        }
        subCategoryModel.addSubCategory(data)
            .then(() => {
                miscHelpers.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                miscHelpers.response(res, '', 400, error)
            })
    },
    deleteSubCategory: (req, res) => {
        const idSub = req.params.idSub
        subCategoryModel.deleteSubCategory(idSub)
            .then((resultData) => {
                const result = resultData[0]
                miscHelpers.response(res, result)
            })
            .catch((error) => {
                console.log(error)
                miscHelpers.response(res, '', 400, error)
            })
    },
    updateSubCategory: (req, res) => {
        const idSub = req.params.idSub
        const data = {
            subName: req.body.subName,
            price: req.body.price,
            image: null
        }
        subCategoryModel.updateSubCategory(idSub, data)
            .then(() => {
                miscHelpers.response(res, data)
            })
            .catch((error) => {
                console.log(error)
                miscHelpers.response(res, '', 400, error)
            })
    }
}