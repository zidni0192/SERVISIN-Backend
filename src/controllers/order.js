const models = require('../models/order')
const helper = require('../helpers/helper')

module.exports = {
    getOrderIdMitra: (req, res) => {
        const idMitra = req.params.idMitra
        models.getOrderIdMitra(idMitra)
          .then((result) => {
            helper.response(res, result)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    getOrderIdDetail: (req, res) => {
        const idMitra = req.params.idMitra
        const idOrder = req.params.idOrder
        models.getOrderIdDetail(idOrder, idMitra)
          .then((result) => {
            helper.response(res, result)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    getOrderPending: (req, res) => {
        models.getOrderPending()
          .then((result) => {
            helper.response(res, result)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    getOrderSelesai: (req, res) => {
        
        models.getOrderSelesai()
          .then((result) => {
            helper.response(res, result)
          })
          .catch((error) => {
            console.log(error)
          })
    },
    addOrder: (req, res) => {
        const date = new Date()
        const idOrder = 'ORDER-' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
        const data = {
            idOrder: idOrder,
            idMitra:req.body.idMitra,
            idUser : req.body.idUser,
            status : 'pending'
        }
        models.addOrder(data)
            .then(() => {
                helper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
                helper.response(res, '', 400, error)
            })
    },
}