const express = require('express')
const Route = express.Router()
const controller = require('../controllers/mitra')
Route
.post('/register',controller.RegMitra)
.post('/login',controller.getByEmail)

module.exports = Route