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
    },
    getUserByid: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tb_user WHERE idUser=?', idUser, (err, result) => {
                console.log(idUser);
                
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    
    upfotoUser:(img, idUser) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE tb_user SET image = ? WHERE idUser =?' , [idUser, img], (err,result)=>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    upLatLongUser:(data, idUser) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE tb_user SET ? WHERE idUser =?' , [ data, idUser], (err,result)=>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    updataUser:(data, idUser) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE tb_user SET ? WHERE idUser =?' , [ data, idUser], (err,result)=>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    upIDPhoneUser:(data, idUser) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE tb_user SET IDponselUser= ? WHERE idUser =?' , [ data, idUser], (err,result)=>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getUserALL: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tb_user ', (err, result) => {
                // console.log(idMitra);
                
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

}