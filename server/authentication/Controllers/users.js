const connection = require('./connection');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const UserActions = {
	findUserByUsername: (username) => {
		//returns either error or user object
		return new Promise((resolve, reject) => {
			connection
				.query('SELECT * FROM users WHERE username = ?', [ username ])
				.then(([ rows ]) => {
					if (rows.length === 0) {
						return reject(new Error('Invalid username'));
					}
					const user = rows[0];
					return resolve({
						username: user.username,
						password: user.password,
						uId: user.userId
					});
				})
				.catch((err) => reject(err));
		});
	},
	findUserById: (id) => {
		return new Promise((resolve, reject) => {
			connection
				.query('SELECT * FROM users WHERE userId = ?', [ id ])
				.then((result) => {
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
				})
				.catch((err) => reject(err));
		});
	},
	deleteUser: (uId) => {
		//returns either the erorr or confirmation of being deleted
		return new Promise((resolve, reject) => {
			connection.execute('DELETE FROM users WHERE uId = ?', [ uId ]).catch((err) => {
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
			connection
				.query('UPDATE users SET ? = ? WHERE uId = ?', [ field, update, uId ])
				.then(() => {
					console.log('Updated the user');
					return resolve();
				})
				.catch((err) => {
					if (err) return reject(err);
				});
		});
	},
	addUser: (name, username, email, password) => {
		return new Promise((resolve, reject) => {
			const uId = uuidv4();
			/**
                             * Generate hashed password
                             */
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) throw err;
				connection
					.execute('INSERT INTO users SELECT ?,?,?,?,?', [ uId, name, username, email, hash ])
					.then(() => resolve({ uId, username, email, name, hash }))
					.catch((error) => reject(error));
			});
		});
	}
};
module.exports = UserActions;
