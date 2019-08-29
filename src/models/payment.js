const conn = require('../configs/db')

module.exports = {
    addPayment: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO tb_payment SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchPayment: (data, idOrder) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE tb_payment SET ? WHERE idOrder = ?`, [data, idOrder], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}