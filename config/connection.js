const mysql = require('mysql');

// Defines mysql connection and database we'll be working with
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root4',
    database: 'nom_burgers_db'
});

// Makes connection with the mysql database
connection.connect((err)=> {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;