const mysql = require('mysql');
const config = require('../../config/config');

const connection = mysql.createConnection(config.connection);

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to database: ', err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection;