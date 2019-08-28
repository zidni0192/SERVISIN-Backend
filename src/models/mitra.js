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
    getMitraByid: (idMitra) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tb_mitra INNER JOIN tb_Category ON tb_mitra.idCategory = tb_Category.idCategory INNER JOIN tb_subCategory ON tb_subCategory.idCategory = tb_Category.idCategory  WHERE idMitra=?', idMitra, (err, result) => {
                console.log(idMitra);
                
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getMitraByCat: (idMitra) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tb_mitra INNER JOIN tb_Category ON tb_mitra.idCategory = tb_Category.idCategory INNER JOIN tb_subCategory ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_Category.idCategory=?', idMitra, (err, result) => {
                console.log(idMitra);
                
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getMitraALL: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tb_mitra INNER JOIN tb_Category ON tb_mitra.idCategory = tb_Category.idCategory INNER JOIN tb_subCategory ON tb_subCategory.idCategory = tb_Category.idCategory ', (err, result) => {
                // console.log(idMitra);
                
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
    },
    upLatLongMitra:(data, idMitra) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE tb_mitra SET ? WHERE idMitra =?' , [data, idMitra], (err,result)=>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    updataMitra:(data, idMitra) => {
        return new Promise((resolve, reject)=>{
            connection.query('UPDATE tb_mitra SET ? WHERE idMitra =?' , [data, idMitra], (err,result)=>{
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}