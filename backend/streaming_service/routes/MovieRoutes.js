const express = require("express");
const router = express.Router()
const MovieActions = require("../Controllers/MovieActions");
const startStream = require("../utils/StreamFunctions");

router.get('/getMoviebyId', async (request, response) => {
    if (!request.query || !request.query.movieId) {
        response.sendStatus(400);
    } else {
        MovieActions.getMovieById(request.query.movieId).then(file_path => {
            startStream(file_path, request, response);
        }).catch(error => {
            if (error.message === "Invalid movieId") {
                response.sendStatus(404);
            } else {
                response.sendStatus(500)

            }

        })

    }
})
router.post('/addMovie', (request, response) => {
    if (!request.body || !request.body.file_path) {
        response.sendStatus(400);
    } else {

        MovieActions.addMovie(request.body.file_path)
            .then(({ movieId }) => response.json({ movieId: movieId }))
            .catch(() => response.send(500));
    }

});
//router.put('/updateMovieById', (request, response => { MovieActions.updateMovieById(request, response) }));
router.delete('/deleteMovieById', (request, response) => {
    if (!request.query || !request.query.movieId) {
        response.sendStatus(400);
    } else {
        MovieActions.deleteMovieFileById(request.query.movieId)
            .then(status => response.sendStatus(status))
            .catch((error) => {
                if (error.message === "Invalid movieId") {
                    response.sendStatus(404);
                } else {
                    response.sendStatus(500)
                }
            })

    };

}
)

module.exports = router;