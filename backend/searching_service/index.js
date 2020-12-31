
const movieRoutes = require("./routes/movieRoutes");
const config = require("./config");


const express = require("express");

const server=express()

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(movieRoutes)
server.listen(config.PORT, ()=>console.log(config.PORT))
