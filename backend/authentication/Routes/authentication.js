const express = require("express");
const router = express.Router();
const UserActions = require("../Controllers/users");

router.post('/login', (req, res) => {
    console.log(req);
    res.send("Login")
});
router.post('/register', (req, res) => {
    //validation done in front-end
    UserActions.addUser(req, res);
});

module.exports = router;
