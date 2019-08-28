const conn = require('../configs/db')

module.exports = {
    getSubCategory: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_subCategory WHERE idSub = ?`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getSubCategoryById: (idSub) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_subCategory WHERE idCategory = ?`, idSub, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    addSubCategory: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO tb_subCategory SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    deleteSubCategory: (idSub) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE from tb_subCategory WHERE idSub = ?`, idSub, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updateSubCategory: (idSub, data) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE SET ? FROM tb_subCategory WHERE idSub = ?`, [data, idSub], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}