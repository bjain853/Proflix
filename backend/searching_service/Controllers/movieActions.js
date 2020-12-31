
const connection = require("./connection");
const { v4: uuidv4 } = require('uuid');


module.exports = {

    addMovie: (filepath, title, release_year, imdb_link) => {


        return new Promise((resolve, reject) => {
            try {
                connection.beginTransaction((error) => {
                    if (error) return connection.rollback(() => {
                        throw error;
                    })
                    connection.query("SELECT * FROM movies WHERE title = ? and release_year = ?", [title, release_year], (error, results) => {
                        if (error) return connection.rollback(() => {
                            throw error;
                        })
                        if (results.length == 0) {
                            const movieId = uuidv4();
                            console.log(movieId);
                            
                                
                                connection.query("INSERT INTO movies (m_id, title, release_year, imdb_link, filepath) VALUES (?,?,?,?,?)", [movieId, title, release_year, imdb_link, filepath],
                                    (error) => {
                                        if (error) {
                                            return connection.rollback(() => {
                                                throw error;
                                            })
                                        }
                                        else {
                                            console.log("Movie added");
                                            resolve(201);
                                        }

                                    })
                            
                            
                            connection.commit((error) => {
                                if (error) return connection.rollback(() => {
                                    
                                    throw error;
                                })
                            })
                        } else {
                            reject(Error("Movie already exists"));
                        }
                    });
                })
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
        //returns either the error or confirmation that 

    },

       
    deleteMovieFileById: (movieId) => {
        return new Promise((resolve, reject) => {
            try {
                var fileToDelete;
                connection.query("SELECT filepath FROM movies WHERE m_id = ?", [movieId], (error, result) => {
                    if (error) throw error;
                    if (result.length == 0) {
                        resolve(404);
                    }
                    fileToDelete = result[0].filepath;
                    })
                connection.query("DELETE FROM movies WHERE m_id = ?", [movieId], (err, result) => {
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
            console.log(movieId);
            connection.query("SELECT * FROM movies WHERE m_id = ?", [movieId], (err, result) => {
                if (err) {
                    reject(err);
                } if (result&&result.length===0) {
                   
                    reject(new Error("Invalid movieId"));
                } else {
                    console.log(result);
                    
                    resolve(result[0]);
                }
                //have to do something else

            })
        })

    },

    getMoviesBytitle: (title) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM movies WHERE title LIKE "%"?"%" ', [title], (err, result) => {
                if (err) {
                    reject(err);
                } if (result&&result.length === 0) {
                    reject(new Error("Invalid title"));
                } else {
                    console.log(result);
                    resolve(result);
                }
                //have to do something else
                
            })
        })

    },

    getMoviesByReleaseYear: (year) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM movies WHERE release_year LIKE "%"? ', [year], (err, result) => {
                if (err) {
                    reject(err);
                } if (result&&result.length === 0) {
                    reject(new Error("No movies of this year"));
                } else {
                    console.log(result);
                    resolve(result);
                }
                //have to do something else
                
            })
        })

    },

   updateMovieById: (movieId, field, value) => {
        return new Promise((resolve, reject) => {
            try {
                var query = `UPDATE movies SET ${field} = '${value}' WHERE m_id = ${movieId}`;
                connection.query(query, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    console.log('Updated '+ field + ' to ' + value +' for m_id: ' + movieId );
                    resolve(200);
                });


            } catch (error) {
                reject(error);
            }

        })


    },

}