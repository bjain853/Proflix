const connection = require("../Controllers/connection");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const utils = require("../utils/fileFunctions");


/**
 * addMovie adds the movie to database by assigning an id to the movie associated to file and renaming the file to id and adding new file path to db
 */
module.exports = {
    addMovie: (file_path) => {
        return new Promise((resolve, reject) => {
            try {
                const movieId = uuidv4();
                console.log(movieId);
                const newPath = utils.filePathNew(file_path, movieId); // renames file to mId and returns new path
                connection.query("INSERT INTO moviefile (mId,file_path) VALUES (?,?)", [movieId, newPath], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Inserted ' + results.affectedRows + ' rows');
                    resolve({ movieId: movieId });
                })
            }
            catch (error) {
                reject(error);
            }
        })

    },
    deleteMovieFileById: (movieId) => {
        return new Promise((resolve, reject) => {
            try {
                var fileToDelete;
                connection.query("SELECT file_path FROM moviefile WHERE mId = ?", [movieId], (error, result) => {
                    if (error) throw error;
                    if (result.length == 0) {
                        resolve(404);
                    }
                    fileToDelete = result[0].file_path;
                    fs.unlinkSync(fileToDelete);
                })
                connection.query("DELETE FROM moviefile WHERE mId = ?", [movieId], (err, result) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Deleted ' + result.affectedRows + ' rows');
                    resolve(200);
                });


            } catch (error) {
                reject(error);
            }

        })


    },
    getMovieById: (movieId) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT file_path FROM moviefile WHERE mId = ?", [movieId], (err, result) => {
                if (err) {
                    reject(err);
                } if (result.length === 0) {
                    reject(new Error("Invalid movieId"));
                } else {
                    resolve(result[0].file_path);
                }
                //have to do something else

            })
        })

    }

}
