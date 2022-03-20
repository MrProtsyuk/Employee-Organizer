const mysql = require('mysql2');

require('dotenv').config();

// CONNECT TO DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL user,
        user: 'root',
        //Your MYSQL pass,
        password: 'Homebrewed2003!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;