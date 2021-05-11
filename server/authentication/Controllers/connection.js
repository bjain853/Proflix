const mysql = require('mysql2/promise');
const config = require('../config/config');
try{

const pool = mysql.createPool({
	connectionLimit: 10,
	host: config.sqlHost,
	user: config.sqlUser,
	password: config.sqlPassword,
	database: config.sqlDb
});

console.log('Connected to Database...');

module.exports = pool;
}catch(err){
console.log(err);
module.exports=null;
}
