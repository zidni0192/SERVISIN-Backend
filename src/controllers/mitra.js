const models = require('../models/mitra')
const helper = require('../helpers/helper')
const jwt = require('jsonwebtoken')
module.exports = {
    RegMitra: (req, res) => {
        const date = new Date()
        const idMitra = 'MITRA-' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
        const salt = helper.generateSalt()
        const password = helper.setPassword(req.body.password, salt)
        const data = {
            idMitra: idMitra,
            fullname: req.body.fullname,
            idCategory: req.body.idCategory,
            email: req.body.email,
            nohp: req.body.nohp,
            lat: req.body.lat,
            long: req.body.long,
            image: 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566321024/img/blank-profile-picture-973460_960_720_wolhdp.png',
            password: password.passwordHash,
            salt: salt,
            role: 'mitra',
        }
        models.RegMitra(data)
            .then((result) => {
                res.json(data)
            })
            .catch((error) => {
                res.json(error)
            })
    },
    getByEmail: (req, res) => {
        const email = req.body.email || ""
        const password = req.body.password || ""
        models.getByEmail(email)
            .then((result) => {
                if (result.length > 0) {
                    const dataMitra = result[0]
                    const mitraPassword = helper.setPassword(password, dataMitra.salt).passwordHash
                    if (mitraPassword === dataMitra.password) {
                        dataMitra.token = jwt.sign({
                            userid: dataMitra.id
                        }, process.env.SECRET_KEY, { expiresIn: '1h' })
                        delete dataMitra.salt
                        delete dataMitra.password
                        return res.json(dataMitra)
                    } else {
                        res.json('Password Salah')
                    }
                } else {
                    res.json("Email Tidak Terdaftar")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}