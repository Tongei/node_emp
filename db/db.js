const mysql = require('mysql');

const db_connection = mysql.createConnection({
    hoost : "localhost",
    user : 'root',
    password : '',
    database : 'db-employee',
    port : '3306'
})
    
module.exports = db_connection;