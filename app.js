require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./src/routes/user')
const subCategoryRoutes = require('./src/routes/subCategory')
const categoryRoutes = require('./src/routes/category')
const port = 3400
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(port, () => {
    console.log(`We are running in port ${port}`);
})

app.use('/user', userRoutes)
app.use('/subCategory', subCategoryRoutes)
app.use('/category', categoryRoutes)