const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserActions = require('../Controllers/users');

router.post('/login',passport.authenticate('local') ,(req, res, next) => {
	res.redirect('http://localhost:3000/dashboard');
});

router.get('/getUser', (req, res) => {
	res.send(req.user);
});

router.post('/register', async (req, res) => {
	//validation done in front-end
	if (req.body) {
		const { name, username, email, password } = req.body;
		if (!name || !username || !email || !password) {
			res.sendStatus(400);
		} else {
			UserActions.addUser(name, username, email, password)
				.then(() => {
					res.sendStatus(201);
				})
				.catch((error) => {
					if (error.message === 'Username already registered') {
						res.sendStatus(409);
					} else {
						res.sendStatus(500);
					}
				});
		}
	}
});

router.get('/logout', (req, res) => {
	req.logout();
	if (!req.user) res.sendStatus(200);
	else res.sendStatus(406);
});

module.exports = router;
