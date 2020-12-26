const express = require("express");

const router = express.Router();
const movieRoutes = require("./MovieRoutes")

router.use(movieRoutes);

module.exports = router;

