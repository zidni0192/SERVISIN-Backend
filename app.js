require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const app = express()
const port = process.env.SERVER_PORT || 3333

const userRoutes = require('./src/routes/user')
const subCategoryRoutes = require('./src/routes/subCategory')
const mitraRoutes = require('./src/routes/mitra')

const whitelist = process.env.WHITELIST

const corsOptions = (req, callback) => {
  if (whitelist.split(',').indexOf(req.header('Origin')) !== -1) {
    console.log('Success')
    return callback(null, {
      origin: true
    })
  } else {
    console.log('Failed')
    return callback(membernull, {
      origin:false
    })
  }
} 

app.use(cors());
app.options('*', cors(corsOptions))
app.use(xssFilter())
app.use(logger('dev'))

app.listen(port, () => {
  console.log(`\n We are running in port ${port} \n `)
})

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type
app.use('/user',userRoutes)
app.use('/mitra',mitraRoutes)
app.use('/subCategory', subCategoryRoutes)