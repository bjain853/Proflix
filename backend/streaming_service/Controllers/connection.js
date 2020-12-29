const config = require("../config");
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: config.HOSTNAME,
    user: config.SQL_USER,
    password: config.SQL_PASSWORD,
    database: config.DB,
});

connection.connect(function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
    else {
        console.log("Connected to SQL database");

    }
});

module.exports = connection

