const express = require("express");

const router = express.Router();


router.get('/getMoviebyId', (request, response) => { MovieActions.getMoviePathById(request, response) });
router.post('/addMovie', (request, response) => { MovieActions.create(request, response) });
router.put('/updateMovieById', (request, response => { MovieActions.updateMovieById(request, response) }));
router.delete('/movieById', (request, response) => { MovieActions.deleteMovieFileById(request, response) });



