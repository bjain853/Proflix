const { request, response } = require("express");
const express = require("express");
const router = express.Router()
const MovieActions = require("../Controllers/MovieActions");

router.get('/getMoviebyId', (request, response) => { MovieActions.getMovieById(request, response) });
router.post('/addMovie', (request, response) => { MovieActions.addMovie(request, response) });
router.put('/updateMovieById', (request, response => { MovieActions.updateMovieById(request, response) }));
router.delete('/movieById', (request, response) => { MovieActions.deleteMovieFileById(request, response) });

module.exports = router;