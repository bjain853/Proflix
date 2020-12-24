const express = require("express")
const config = require("./config")
const server = express();
//const cors = require("cors");
//const mainRouter = require("./routes/index");
const connection = require("./Controllers/connection");
const MovieActions = require("./Controllers/MovieActions");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/api/getMoviebyId', (request, response) => { MovieActions.getMovieById(request, response) });
server.post('/api/addMovie', (request, response) => { MovieActions.create(request, response) });
server.put('/api/updateMovieById', (request, response) => { MovieActions.updateMovieById(request, response) });
server.delete('/api/deleteMovieById', (request, response) => { MovieActions.deleteMovieFileById(request, response) });



server.get("/", (req, res) => {
    res.send("<h1> Hello World </h1>")
});

server.listen(config.PORT, () => {
    console.log(`Running on PORT ${config.PORT}`)
});