const conn = require('../configs/db')

module.exports = {
    getPendingIdMitra: (idMitra) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT tb_mitra.fullname AS mitraName,tb_mitra.idSubCat, tb_mitra.email AS emailMitra, tb_mitra.nohp AS noHpMitra, tb_mitra.lat AS latMitra, tb_mitra.long AS longMita, tb_mitra.image AS imageMitra, tb_mitra.role AS roleMitra, tb_user.fullname AS nameUser, tb_user.email AS emailUser, tb_user.nohp AS nohpUser, tb_user.image AS imageUser, tb_user.long AS longUser, tb_user.lat AS latUser, tb_user.role AS roleUser, tb_user.idUser, tb_mitra.idMitra, tb_Category.idCategory, tb_Category.catName, tb_Category.image AS imageCategory, tb_subCategory.idSubCat, tb_subCategory.idCategory, tb_subCategory.subName, tb_subCategory.price, tb_subCategory.image AS imageSub FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_mitra.idMitra= ? AND tb_order.status='pending'`, idMitra, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getSelesaiIdMitra: (idMitra) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT tb_mitra.fullname AS mitraName,tb_mitra.idSubCat, tb_mitra.email AS emailMitra, tb_mitra.nohp AS noHpMitra, tb_mitra.lat AS latMitra, tb_mitra.long AS longMita, tb_mitra.image AS imageMitra, tb_mitra.role AS roleMitra, tb_user.fullname AS nameUser, tb_user.email AS emailUser, tb_user.nohp AS nohpUser, tb_user.image AS imageUser, tb_user.long AS longUser, tb_user.lat AS latUser, tb_user.role AS roleUser, tb_user.idUser, tb_mitra.idMitra, tb_Category.idCategory, tb_Category.catName, tb_Category.image AS imageCategory, tb_subCategory.idSubCat, tb_subCategory.idCategory, tb_subCategory.subName, tb_subCategory.price, tb_subCategory.image AS imageSub FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_mitra.idMitra= ? AND tb_order.status='selesai'`, idMitra, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getPendingIdUser: (idUser) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT tb_mitra.fullname AS mitraName,tb_mitra.idSubCat, tb_mitra.email AS emailMitra, tb_mitra.nohp AS noHpMitra, tb_mitra.lat AS latMitra, tb_mitra.long AS longMita, tb_mitra.image AS imageMitra, tb_mitra.role AS roleMitra, tb_user.fullname AS nameUser, tb_user.email AS emailUser, tb_user.nohp AS nohpUser, tb_user.image AS imageUser, tb_user.long AS longUser, tb_user.lat AS latUser, tb_user.role AS roleUser, tb_user.idUser, tb_mitra.idMitra, tb_Category.idCategory, tb_Category.catName, tb_Category.image AS imageCategory, tb_subCategory.idSubCat, tb_subCategory.idCategory, tb_subCategory.subName, tb_subCategory.price, tb_subCategory.image AS imageSub FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_user.idUser= ? AND tb_order.status='pending'`, idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getSelesaiIdUser: (idUser) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT tb_mitra.fullname AS mitraName,tb_mitra.idSubCat, tb_mitra.email AS emailMitra, tb_mitra.nohp AS noHpMitra, tb_mitra.lat AS latMitra, tb_mitra.long AS longMita, tb_mitra.image AS imageMitra, tb_mitra.role AS roleMitra, tb_user.fullname AS nameUser, tb_user.email AS emailUser, tb_user.nohp AS nohpUser, tb_user.image AS imageUser, tb_user.long AS longUser, tb_user.lat AS latUser, tb_user.role AS roleUser, tb_user.idUser, tb_mitra.idMitra, tb_Category.idCategory, tb_Category.catName, tb_Category.image AS imageCategory, tb_subCategory.idSubCat, tb_subCategory.idCategory, tb_subCategory.subName, tb_subCategory.price, tb_subCategory.image AS imageSub FROM tb_mitra INNER JOIN tb_order ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat INNER JOIN tb_Category ON tb_subCategory.idCategory = tb_Category.idCategory WHERE tb_user.idUser= ? AND tb_order.status='selesai'`, idUser, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getOrderIdDetail: (idOrder, idMitra) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_order INNER JOIN tb_mitra ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat WHERE idOrder = ? AND tb_order.idMitra =?`, [idOrder, idMitra], (err, result) => {
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
            conn.query(`SELECT * FROM tb_order INNER JOIN tb_mitra ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat WHERE status = ?`, statusOrder, (err, result) => {
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
            conn.query(`SELECT * FROM tb_order INNER JOIN tb_mitra ON tb_order.idMitra = tb_mitra.idMitra INNER JOIN tb_user ON tb_order.idUser = tb_user.idUser INNER JOIN tb_subCategory ON tb_mitra.idSubCat = tb_subCategory.idSubCat WHERE status = ?`, statusOrder, (err, result) => {
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
    patchOrder: (data, idOrder) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE tb_order SET ? WHERE idOrder = ?`, [data, idOrder], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    
}