const mysql = require('mysql2/promise');
const config = require('../config/config');
const redis = require('redis');
try {

	const pool = mysql.createPool({
		connectionLimit: 10,
		host: config.sqlHost,
		user: config.sqlUser,
		password: config.sqlPassword,
		database: config.sqlDb
	});

	const redisClient = redis.createClient();
	console.log('Connected to Databases...');

	function getConnection(cb) {
		pool.getConnection().then(connection => {
			if (connection) {
				cb(connection);

			} else throw new Error("Cannot get a connection to DB");
			connection.release();
		}).catch(err => cb(err));

	};

	module.exports = { redisClient, getConnection };

} catch (err) {
	console.log(err);
	module.exports = null;
}
