const express = require('express')
const Route = express.Router()
const controller = require('../controllers/mitra')
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
.get('/', controller.getMitraALL)
.get('/:idMitra', controller.getMitraByid)
.get('/category/:idCategory', controller.getMitraBycat)
.post('/register',controller.RegMitra)  
.post('/login',controller.getByEmail)
.patch('/image/:idMitra', upload.single('image'), controller.upfotoMitra)
.patch('/:idMitra', controller.updataMitra)
.patch('/idphone/:idMitra', controller.upIDPhoneMitra)
.patch('/posision/:idMitra', controller.upLatLongMitra)
.patch('/logout/:idMitra', controller.logout)


module.exports = Route