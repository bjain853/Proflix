const axios = require('axios');

export default {
	login: (user) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/login`, user)
				.then((response) => {
					localStorage.setItem("token",response.data);
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
					localStorage.setItem("token",response.data);
					return resolve(response.data);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	},
	checkSession: () => {
		return new Promise((resolve, reject) => {
			const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
			axios
				.get(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/checkSession`, {
					headers: { Authorization: token }
				})
				.then((response) => {
					if (response.status === 200) resolve();
					else {
						if (token) localStorage.removeItem('token');
						return reject(new Error('Invalid token provided'));
					}
				})
				.catch((error) => {
					return reject(error);
				});
		});
	},
	logout: () => {
		return new Promise((resolve, reject) => {
			const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
			axios
				.get(`http://localhost:${process.env.NEXT_PUBLIC_AUTH_PORT}/api/logout`, {
					headers: { Authorization: token }
				})
				.then((response) => {
					return resolve(response);
				})
				.catch((error) => {
					return reject(error);
				});
		});
	}
};
