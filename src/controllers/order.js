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
  notification : (req,res) =>{
    let message_content = req.body.msg;
    let phoneID = req.body.phoneid;
    let header = req.body.header;

    var sendNotification = function (data) {
        var headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic NmY3MDQwM2EtY2JjMC00YjQ3LWJhMDUtZTJhMzIxMGRiNzBj"
        };

        var options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };

        var https = require('https');
        var onesignalreq = https.request(options, function (res) {
            res.on('data', function (data) {
                console.log("Response:");
                console.log(JSON.parse(data));
            });
        });

        onesignalreq.on('error', function (e) {
            console.log("ERROR:");
            console.log(e);
        });

        onesignalreq.write(JSON.stringify(data));
        onesignalreq.end();
    };

    var message = {
        app_id: "d92c3fc2-9bf7-42bc-ba41-8f9587d65de6",
        contents: { "en": `${message_content}` },
        headings: {"en": `${header}`},
        include_player_ids: [`${phoneID}`]
    };

    sendNotification(message);
    res.status(200).send("Notification sended");
}
}