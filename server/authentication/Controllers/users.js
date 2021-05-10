const connection = require('./connection');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	findUserByUsername: (username) => {
		//returns either error or user object
		return new Promise((resolve, reject) => {
			connection
				.query('SELECT * FROM users WHERE username = ?', [ username ], (err, result) => {
					if (err) {
						return reject(err);
					} else {
						if (result.length === 0) {
							return reject(new Error('Invalid username'));
						}
						return resolve({
							name: result[0].name,
							username: result[0].username,
							email: result[0].email,
							password: result[0].password,
							uId: result[0].uId
						});
					}
				});
				
		});
	},
	findUserById: (id) => {
		return new Promise((resolve, reject) => {
			connection.query('SELECT * FROM users WHERE uId = ?', [ id ], (err, result) => {
				if (err) {
					reject(err);
				}
				if (result.length === 0) {
					resolve({});
				} else {
					resolve({
						name: result[0].name,
						username: result[0].username,
						email: result[0].email,
						password: result[0].password,
						uId: result[0].uId
					});
				}
			});
		});
	},
	deleteUser: (uId) => {
		//returns either the erorr or confirmation of being deleted
		return new Promise((resolve, reject) => {
			connection.execute('DELETE FROM users WHERE uId = ?', [ uId ], (err) => {
				if (err) {
					return reject(err);
				} else {
					console.log('Deleted the user');
					return resolve();
				}
			});
		});
	},
	updateInfo: (uId, field, update) => {
		// returns either the error or the updated user Object
		return new Promise((resolve, reject) => {
			connection.quuery('UPDATE users SET ? = ? WHERE uId = ?', [ field, update, uId ], (err) => {
				if (err) {
					return reject(err);
				} else {
					console.log('Updated the user');
					return resolve();
				}
			});
		});
	},
	addUser: (name, username, email, password) => {
		return new Promise((resolve, reject) => {
			try {
				connection.query('SELECT * FROM users where username=?', [ username ], (error, results) => {
					if (error) throw error;
					if (results.length !== 0) throw new Error('User already registered');
				});

				const uId = uuidv4();
				/**
                             * Generate hashed password
                             */
				bcrypt.hash(password, 10, (err, hash) => {
					if (err) throw err;
					connection.execute(
						'INSERT INTO users SELECT ?,?,?,?,?',
						[ uId, username, name, email, hash ],
						(error) => {
							if (error) {
								throw error;
							} else {
								console.log('User added');
								resolve(true);
							}
						}
					);
				});
			} catch (error) {
				return reject(error);
			}
		});
	}
};