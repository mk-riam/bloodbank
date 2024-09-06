const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mine123',
    database: 'vitalveinslogin'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully!');
});

module.exports = conn;
