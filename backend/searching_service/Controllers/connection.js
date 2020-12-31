const mysql2 = require("mysql2");

const config = require("../config");


// Create a connection to the database
const connection = mysql2.createConnection({
  host: config.HOST,
  user: config.SQL_USER,
  password: config.SQL_PASSWORD,
  database: config.SQL_DATABASE
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports=connection
