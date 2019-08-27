const connection = require('../configs/db')
module.exports = {
    postUser: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO tb_user SET ?', data, (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    },
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tb_user WHERE email=?', email, (err, result) => {
                console.log(email);
                
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}