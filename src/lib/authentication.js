const axios = require('axios');

const AuthActions = {
	login: (user) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/login`, user)
				.then((response) => {
					console.log(response);
					return resolve(response);
				})
				.catch((error) => {
					console.error(error);
					return reject(error);
				});
		});
	},
	signUp: (user) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/register`, user)
				.then((response) => {
					console.log(response);
					return resolve(response);
				})
				.catch((error) => {
					console.error(error);

					return reject(error);
				});
		});
	},
	getUser: () => {
		return new Promise((resolve, reject) => {
			axios
				.get(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/getUser`)
				.then((response) => {
					console.log(response);
					return resolve(response);
				})
				.catch((error) => {
					console.error(error);

					return reject(error);
				});
		});
	},
	logout: () => {
		return new Promise((resolve, reject) => {
			axios
				.get(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/logout`)
				.then((response) => {
					return resolve(response);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	}
};

export default AuthActions;
