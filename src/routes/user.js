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
.get('/', controller.getUserALL)
.post('/register',controller.postUser)
.get('/:idUser', controller.getUserByid)
.post('/login',controller.getByEmail)
.patch('/image/:idUser', upload.single('image'), controller.upfotoUser)
.patch('/:idUser', controller.updataUser)
.patch('/idphone/:idUser', controller.upIDPhoneUser)
.patch('/posision/:idUser', controller.upLatLongUser)
.patch('/logout/:idUser',controller.logout)
module.exports = Route