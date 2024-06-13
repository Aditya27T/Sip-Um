const connecting = require('./connection');

connecting.connect((err) => {
    if (err) {
        console.log('Error connecting to database: ', err);
    } else {
        console.log('Connected to database');
    }
});

// check test table connection
connecting.query('SELECT * FROM pegawai', (err, rows) => {
    if (err) {
        console.log('Error querying test table: ', err);
    } else {
        console.log('Successfully queried test table: ', rows);
    }
});

module.exports = connecting;