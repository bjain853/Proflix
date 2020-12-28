const mysql = require('mysql');
const config = require("../config/config")

var connection = mysql.createConnection({
  host: config.sqlHost,
  user: config.sqlUser,
  password: config.sqlPassword,
  database: config.sqlDb,
});

const localconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "***REMOVED***",
  database: config.sqlDb,
});

localconnection.connect((err) => {
  if (err) {
    console.error("Cannot connect to local DB");
    console.error(err.message);
  }
  else console.log("Connected to local DB");
})

// connection.connect(function (err) {
//   if (err) {
//     console.log(`Cannot connect to SQL database @ ${config.sqlHost}`);
//     localconnection.connect((error) => {
//       if (error) {
//         console.log("Local sql db is down");
//       } else {
//         console.log("Connected to local Db");
//       }
//     })
//   } else {
//     console.log(`Connected to SQL database @ ${config.sqlHost}`);
//   }
// });



module.exports = localconnection