const express = require("express");
const router = express.Router()
const movieActions = require("../Controllers/movieActions");


router.get('/getMoviebyId', async (request, response) => {
    if (!request.query || !request.query.movieId) {
        response.sendStatus(400);
    } else {
        movieActions.getMovieById(request.query.movieId).then(movie => {
           response.json(movie);
        }).catch(error => {
            if (error.message === "Invalid movieId") {
                response.sendStatus(404);
            } else {
                console.log(error);
                response.sendStatus(500)

            }

        })

    }
})


router.delete('/deleteMovieFileById', (request, response) => {
    if (!request.query || !request.query.movieId) {
        response.sendStatus(400);
    } else {
        movieActions.deleteMovieFileById(request.query.movieId)
            .then(status => response.sendStatus(status))
            .catch((error) => {
                if (error.message === "Invalid movieId") {
                    response.sendStatus(404);
                } else {
                    response.sendStatus(500)
                }
            })

    };
})


router.get('/getMoviesbytitle', (request, response) => {
    if (!request.query || !request.query.title) {
        response.sendStatus(400);
    } else {
        movieActions.getMoviesBytitle(request.query.title).then(movies => {
           response.json(movies);
        }).catch(error => {
            if (error.message === "Invalid Title") {
                response.sendStatus(404);
            } else {
                console.log(error);
                response.sendStatus(500)

            }

        })

    }
})



router.get('/getMoviesbyReleaseYear', (request, response) => {
    if (!request.query || !request.query.year) {
        response.sendStatus(400);
    } else {
        movieActions.getMoviesByReleaseYear(request.query.year).then(movies => {
           response.json(movies);
        }).catch(error => {
            if (error.message === "No movies of this year") {
                response.sendStatus(404);
            } else {
                console.log(error);
                response.sendStatus(500)

            }

        })

    }
})

router.put('/updateMovieById', (request, response) => {
    if (!request.body || !request.body.movieId || !request.body.field || !request.body.value) {
        console.log(request.body);
        response.sendStatus(400);
    } else {
        movieActions.updateMovieById(request.body.movieId, request.body.field, request.body.value)
            .then(status => response.sendStatus(status))
            .catch((error) => {
                if (error.message === "Invalid movieId") {
                    response.sendStatus(404);
                } else {
                    response.sendStatus(500)
                }
            })

    };

})


router.put('/addMovie', (request, response) => {
    if (!request.body || !request.body.filepath || !request.body.title) {
        console.log(request.body);
        response.sendStatus(400);
    } else {
        movieActions.addMovie(request.body.filepath, request.body.title, request.body.release_year, request.body.imdb_link)
            .then(status => response.sendStatus(status))
            .catch((error) => {
                if (error.message=== "Movie already exists") {
                    response.sendStatus(409);
                } else {
                    console.log(error.stack)
                    response.sendStatus(500)
                }
            })

    };
})

module.exports = router;