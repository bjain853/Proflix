const connection = require("../Controllers/connection");
const fs = require("fs");
const startStream = require("../utils/StreamFunctions");
const { v4: uuidv4 } = require('uuid');
const utils = require("../utils/fileFunctions");


/**
 * addMovie adds the movie to database by assigning an id to the movie associated to file and renaming the file to id and adding new file path to db
 */
module.exports = {
    addMovie: (request, response) => {
        if (request.body == null || request.body.file_path == null) {
            response.sendStatus(400);
        } else {
            try {
                const movieId = uuidv4();
                console.log(movieId);
                const newPath = utils.filePathNew(request.body.file_path, movieId, response); // renames file to mId and returns new path
                connection.query("INSERT INTO moviefile (mId,file_path) VALUES (?,?)", [movieId, newPath], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Inserted ' + results.affectedRows + ' rows');
                    response.json({ movieId: movieId });
                })
            }
            catch (error) {
                response.sendStatus(500);
            }

        }},
        deleteMovieFileById: (request, response) => {
            if (request.body == null || request.body.movieId == null) {
                response.sendStatus(400);
            } else {
                var fileToDelete;
                connection.query("SELECT file_path FROM moviefile WHERE mId = ?", [request.body.movieId], (error, result) => {
                    if (error) throw error;
                    fileToDelete = result[0].file_path;
                    fs.unlinkSync(fileToDelete);
                })
                connection.query("DELETE FROM moviefile WHERE mId = ?", [request.body.movieId], (err, result) => {
                    if (err) {
                        response.sendStatus(500);
                        throw err;
                    }
                    console.log('Deleted ' + result.affectedRows + ' rows');
                    response.sendStatus(200);
                });
            }

        },
            getMovieById: (request, response) => {
                if (request.body == null || request.body.movieId == null) {
                    response.sendStatus(400);
                } else {
                    connection.query("SELECT file_path FROM moviefile WHERE mId = ?", [request.body.movieId], (err, result) => {
                        if (err) {
                            response.sendStatus(500);
                            throw err;
                        }
                        startStream(result[0].file_path, response, request);
                    })

                }
            }

    }