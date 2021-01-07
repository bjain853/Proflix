const express = require("express");
const router = express.Router()
const { getMovieStream, indexMovieById, updateMovieLocation, deleteMovieFile } = require("../Controllers/MovieActions");

router.get('/getMovieStream', async (request, response) => {
    if (!request.query || !request.query.filePath) {
        response.sendStatus(400);
    } else {
        getMovieStream(request.query.filePath, request.headers.range).then(streamObj => {
            const { head, status, file } = streamObj;
            response.writeHead(status, head);
            file.pipe(response);
        }).catch(error => {
            if (error.message.includes("ENOENT")) {

                response.sendStatus(404);
            } else {
                console.log(error);
                response.sendStatus(500)

            }

        }

        )

    }
})
router.post('/indexMovieById', (request, response) => {
    if (!request.body || !request.body.filePath || !request.body.movieId) {
        response.sendStatus(400);
    } else {
        indexMovieById(request.body.movieId, request.body.filePath)
            .then((newPath) => response.json({ newPath }))
            .catch((error) => {
                console.log(error);
                response.sendStatus(500)
            });
    }
});

router.put('/updateMovieLocation', ((request, response) => {
    if (!request.body || !request.body.old_filePath || !request.body.new_directory) {
        response.sendStatus(400);
    } else {
        updateMovieLocation(request.body.old_filePath, request.body.newDirectory).then((newPath) => response.json({ new_filePath: newPath })).catch(error => {
            {
                console.error(error);
                response.sendStatus(500);
            };
        });
    }
}));

router.delete('/deleteMovieFile', (request, response) => {
    if (!request.body || !request.body.filePath) {
        response.sendStatus(400);
    } else {
        deleteMovieFile(request.body.filePath)
            .then(() => response.sendStatus(200))
            .catch((error) => {
                if (error.message.includes("ENOENT")) {
                    response.sendStatus(404);
                } else {
                    console.log(error);
                    response.sendStatus(500)
                }
            })

    };

}
)

module.exports = router;