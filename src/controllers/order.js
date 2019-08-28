const models = require('../models/order')
const helper = require('../helpers/helper')

module.exports = {
  getPendingIdMitra: (req, res) => {
    const idMitra = req.params.idMitra
    models.getPendingIdMitra(idMitra)
      .then((result) => {
        helper.response(res, result)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getSelesaiIdMitra: (req, res) => {
    const idMitra = req.params.idMitra
    models.getSelesaiIdMitra(idMitra)
      .then((result) => {
        helper.response(res, result)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getPendingIdUser: (req, res) => {
    const idUser = req.params.idUser
    models.getPendingIdUser(idUser)
      .then((result) => {
        helper.response(res, result)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getSelesaiIdUser: (req, res) => {
    const idUser = req.params.idUser
    models.getSelesaiIdUser(idUser)
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
      idMitra: req.body.idMitra,
      idUser: req.body.idUser,
      status: 'pending'
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