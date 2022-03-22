const mysql = require('mysql2');

// CONNECT TO DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL user,
        user: 'root',
        //Your MYSQL pass,
        password: 'YOUR MYSQL PASSWORD',
        database: 'organizer'
    },
    console.log('Connected to the organizer database.')
);

module.exports = db;