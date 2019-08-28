const conn = require('../configs/db')

module.exports = {
    getOrderIdMitra: (idMitra) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_mitra.idMitra= ?`,idMitra, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getOrderIdDetail: (idDetail) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_order.idOrder = ? AND tb_mitra.idMitra = ?`,[idOrder, idMitra], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getOrderPending: () => {
        const statusOrder = 'pending'
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_order.status= ?`,statusOrder, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getOrderSelesai: () => {
        const statusOrder = 'selesai'
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_order.status= ?`,statusOrder, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addOrder: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO tb_order SET ?`, data, (err, result) => {
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