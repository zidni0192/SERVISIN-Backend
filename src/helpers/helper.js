const crypto = require('crypto')
module.exports = {
    response: (res, result, status, error) => {
        let resultPrint = {}

        resultPrint.error = error || null
        resultPrint.status_code = status || 200
        resultPrint.result = result

        return res.status(resultPrint.status_code).json(resultPrint)
    },

    generateSalt: () => {
        return crypto.randomBytes(18 / 2).toString('hex').slice(0, 18)
    },
    setPassword: (password, salt) => {
        let hash = crypto.createHmac('sha512', salt)
        hash.update(password)
        let value = hash.digest('hex')
        return {
            salt: salt,
            passwordHash: value
        }
    }
}