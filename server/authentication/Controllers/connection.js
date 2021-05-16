const mysql = require('mysql2/promise');
const config = require('../config/config');
const redis = require('redis');
try{

const pool = mysql.createPool({
	connectionLimit: 10,
	host: config.sqlHost,
	user: config.sqlUser,
	password: config.sqlPassword,
	database: config.sqlDb
});

const redisClient = redis.createClient();
console.log('Connected to Databases...');

module.exports = {pool,redisClient};
}catch(err){
console.log(err);
module.exports=null;
}
