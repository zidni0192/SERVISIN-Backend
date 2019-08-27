require('dotenv').config()
const mysql = require('mysql')
const connection = mysql.createConnection({
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    host:process.env.DB_HOST
})
connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})
module.exports = connection
