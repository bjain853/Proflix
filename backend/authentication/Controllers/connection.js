const mysql = require('mysql2');
const config = require("../config/config")

const connection = mysql.createConnection({
  host: config.sqlHost,
  user: config.sqlUser,
  password: config.sqlPassword,
  database: config.sqlDb,
});

connection.connect((err) => {
  if (err) {
    console.error(`Cannot connect to DB @ ${config.sqlHost}`);
    console.error(err.message);
  }
  else console.log(`Connected to DB @ ${config.sqlHost}`);
})

module.exports = connection
