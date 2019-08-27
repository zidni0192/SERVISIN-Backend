const express = require('express')
const Route = express.Router()
const controller = require('../controllers/user')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, './uploads');
    }, 
    filename: function(req, file, callback) {
      callback(null, file.originalname);
    }
});
  
  let upload = multer({ storage: storage }); 
  
Route
.post('/register',controller.postUser)
.post('/login',controller.getByEmail)
.patch('/:idUser', upload.single('image'), controller.upfotoUser)

module.exports = Route