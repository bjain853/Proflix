const express = require('express');
const server = express();
const config = require('./config/config');
const cors = require('cors');
const authentication = require('./Routes/authentication');
const cookieParser = require('cookie-parser');


/****Middlewares***********/
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors({ origin: `http://localhost:3000`, withCredentials: true }));
server.use(cookieParser());
/****** Routes ****/
server.use('/api', authentication);

/**Start server*****/
server.listen(config.port, () => {
	console.log(`Listening @ Port:${config.port}`);
});
