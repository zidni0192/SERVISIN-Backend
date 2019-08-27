const models = require('../models/user')
const helper = require('../helpers/helper')
const jwt = require('jsonwebtoken')
module.exports = {
    postUser: (req, res) => {
        const date = new Date()
        const idUser = 'USER-' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
        const salt = helper.generateSalt(18)
        const passwordHash = helper.setPassword(req.body.password, salt)
        const data = {
            idUser: idUser,
            fullname: req.body.fullname,
            lat: 0,
            long: 0,
            email: req.body.email,
            password: passwordHash.passwordHash,
            noHp: req.body.noHp,
            role: 'user',
            salt: passwordHash.salt,
            image: 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566321024/img/blank-profile-picture-973460_960_720_wolhdp.png'
        }
        models.postUser(data)
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
                    const dataUser = result[0]
                    const userPassword = helper.setPassword(password, dataUser.salt).passwordHash
                    if (userPassword === dataUser.password) {
                        dataUser.token = jwt.sign({
                            userid: dataUser.id
                        }, process.env.SECRET_KEY, { expiresIn: '1h' })
                        delete dataUser.salt
                        delete dataUser.password
                        return res.json(dataUser)
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