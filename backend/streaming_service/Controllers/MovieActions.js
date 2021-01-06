const { rename, unlinkSync, statSync, createReadStream} = require("fs");
const { basename } = require("path");

/**
 * addMovie adds the movie to database by assigning an id to the movie associated to file and renaming the file to id and adding new file path to db
 */
module.exports = {
    indexMovieById: (movieId, file_path) => {
        return new Promise((resolve, reject) => {
            try {
                const directories = dirname(file_path);
                const extension = extname(file_path);
                const newPath = directories + `/${movieId}` + extension;
                rename(file_path, newPath, (error) => {
                    if (error) {
                        reject(error);
                    }
                });
                resolve(newPath);
            } catch (error) {
                reject(error);
            }


        })

    },
    deleteMovieFile: (file_path) => {
        return new Promise((resolve, reject) => {
            try {
                unlinkSync(file_path);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        })


    },
    getMovieStream: (file_path, range) => {
        return new Promise((resolve, reject) => {
            try {
                const fileSize = statSync(file_path).size;
                if (range) {
                    const parts = range.replace(/bytes=/, "").split("-");
                    const start = parseInt(parts[0], 10);
                    const end = parts[1]
                        ? parseInt(parts[1], 10)
                        : fileSize - 1;

                    const chunksize = (end - start) + 1;
                    const file = createReadStream(file_path, { start, end });
                    const head = {
                        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                        'Accept-Ranges': 'bytes',
                        'Content-Length': chunksize,
                        'Content-Type': 'video/mp4',
                    }
                    resolve({ head, file, status: 206 });

                } else {
                    const head = {
                        'Content-Length': fileSize,
                        'Content-Type': 'video/mp4',
                    }
                    const file = createReadStream(file_path);
                    resolve({ head, file, status: 200 });
                }
            } catch (error) {
                reject(error);
            }
        })
    },

    updateMovieLocation: (old_filepath, new_directory) => {
        return new Promise((resolve, reject) => {
            try {
                const fileName = basename(old_filepath);
                const newPath = `${new_directory}/${fileName}`;
                rename(old_filepath, newPath, (error) => {
                    if (error) {
                        reject(error);
                    }
                });
                resolve(newPath);
            } catch (error) {
                reject(error);
            }


        })
    }


}