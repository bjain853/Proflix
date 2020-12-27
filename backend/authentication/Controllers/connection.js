var mysql = require('mysql');
const config = require("../config/config")

var connection = mysql.createConnection({
  host: "localhost",
  user: config.sqlUser,
  password:config.sqlPassword,
  database:config.sqlDb,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to SQL database");
  });

module.exports = connection;