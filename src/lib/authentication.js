const axios = require('axios');

export default {
	login: (user) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/login`, user)
				.then((response) => {
					localStorage.setItem('token', response.data);
					return resolve(response.data);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	},
	signUp: (user) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/register`, user)
				.then((response) => {
					localStorage.setItem('token', response.data);
					return resolve(response.data);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	},
	checkSession: () => {
		return new Promise((resolve, reject) => {
			const token = localStorage.getItem('token');
			axios
				.get(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/checkSession`, {
					headers: { Authorization: `Proflix ${token}` }
				})
				.then((response) => {
					const valid = response.status === 200;
					if (!valid) {
						localStorage.removeItem('token');
					}
					return resolve(valid);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	},
	logout: () => {
		return new Promise((resolve, reject) => {
			const token = localStorage.getItem('token');
			axios
				.get(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/logout`, {
					headers: { Authorization: `Proflix ${token}` }
				})
				.then((response) => {
					return resolve(response.status === 200);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	}
};
