const express = require('express');
const server = express();
const config = require('./config/config');
const cors = require('cors');
const authentication = require('./Routes/authentication');

/****Middlewares***********/
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors({ origin: `http://localhost:3000`, withCredentials: true }));

/****** Routes ****/
server.use('/api', authentication);

/**Start server*****/
server.listen(config.port, () => {
	console.log(`Listening @ Port:${config.port}`);
});
