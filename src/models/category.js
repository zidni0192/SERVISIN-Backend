const conn = require('../configs/db')

module.exports = {
    getCategory: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT tb_Category.idCategory, tb_Category.catName, tb_subCategory.subName, tb_subCategory.price FROM tb_Category INNER JOIN tb_subCategory ON tb_Category.idSub = tb_subCategory.idSub`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getByIdCategory: (idCategory) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT tb_Category.idCategory, tb_Category.catName, tb_subCategory.subName, tb_subCategory.price FROM tb_Category INNER JOIN tb_subCategory ON tb_Category.idSub = tb_subCategory.idSub WHERE idCategory = ?`, idCategory, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addCategory: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO tb_Category SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteCategory: (idCategory) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM tb_Category WHERE idCategory = ?`, idCategory, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateCategory: (idCategory, data) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE SET ? FROM tb_Category WHERE idCategory = ?`, [data, idCategory], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}