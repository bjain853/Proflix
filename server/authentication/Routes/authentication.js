const express = require('express');
const router = express.Router();
const UserActions = require('../Controllers/users');
const { generateAccessToken, verifyToken } = require('../config/token');
const redis = require('redis');
const redisClient = redis.createClient();
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) throw new Error('Bad request');
	try {
		const user = await UserActions.findUserByUsername(username);
		if (user) {
			const same = bcrypt.compareSync(password, user.password);
			if (same) {
				const token = generateAccessToken(username);
				redisClient.set(token, true);
				res.status(200).json(token);
			} else {
				throw new Error('Password/Username incorrect');
			}
		} else {
			throw new Error(`Username ${username} doesn't exist`);
		}
	} catch (error) {
		let status = 500;
		if (error.message === 'Bad request') status = 400;
		if (error.message === `Username ${username} doesn't exist`) status = 404;
		if (error.message === 'Password/Username incorrect') status = 401;
		res.status(status).json(error.message);
	}
});

router.get('/checkSession', (req, res) => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split(' ')[1];
		const valid = redisClient.get(token);
		if (valid) return res.sendStatus(200);
		else return res.sendStatus(401);
	}
});

router.post('/register', async (req, res) => {
	const { name, username, email, password } = req.body;
	try {
		if (!name || !username || !email || !password) throw new Error('Bad request');
		const user = await UserActions.addUser(name, username, email, password);
		if (user) {
			const token = generateAccessToken(username);
			redisClient.set(token, true);
			return res.status(201).json(token);
		} else {
			throw new Error('No new user was created');
		}
	} catch (error) {
		if (error.errno === 1062) {
			return res.status(409).json('Username already registered');
		} else {
			console.log(error);
			return res.status(500).json(error.message);
		}
	}
});

router.get('/logout', (req, res) => {
	// add token to blacklist if not expired
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(' ')[1];

		if (verifyToken(token) && redisClient.set(token, false)) return res.sendStatus(200);
	} else res.sendStatus(406);
});

module.exports = router;
