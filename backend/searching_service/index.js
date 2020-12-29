const mysql = require("mysql");

require("dotenv").config()

const express = require("express");

const server=express()

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


server.listen(3001)
