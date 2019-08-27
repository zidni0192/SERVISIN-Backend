const connection = require('../configs/db')
module.exports = {
    RegMitra: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO tb_mitra SET ?', data, (error, result) => {
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
            connection.query('SELECT * FROM tb_mitra WHERE email=?', email, (err, result) => {
                console.log(email);
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    upfotoMitra:(img, idMitra) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE tb_mitra SET image = ? WHERE idMitra=?' , [idMitra, img], (err,result)=>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}