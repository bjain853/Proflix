const mysql = require('mysql2/promise');
const config = require('../config/config');

async function ConnectToDB() {
	return await mysql.createPool({
		connectionLimit: 10,
		host: config.sqlHost,
		user: config.sqlUser,
		password: config.sqlPassword,
		database: config.sqlDb
	});
}

try{

  const connectionPool = ConnectToDB();
  console.log("Connected to Database...");
  module.exports = connectionPool;

}catch(error){
  console.log(error);
}



// connection.connect((err) => {

//   if (err) {
//     console.error(`Cannot connect to DB @ ${config.sqlHost}`);
//     console.error(err.message);
//   }
//   else console.log(`Connected to DB @ ${config.sqlHost}`);
// });


