const mysql = require('mysql')
let connection = mysql.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST
})
connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('success');
    }
})

function handleDisconnect() {
    connection = mysql.createConnection({
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST
    });

    connection.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
        }
    })
    
    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            handleDisconnect();                      
        } else {                                     
            throw err;                                
        }
    });
}
handleDisconnect()
module.exports = connection