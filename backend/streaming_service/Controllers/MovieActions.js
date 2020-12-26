const connection = require("../Controllers/connection");
const fs = require("fs");
const path = require("path");
//have to add file operations too

const startStream = (path, res, req) => {
    console.log(req.headers.range);
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }

}

module.exports = {
    addMovie: (request, response) => {
        if (request.body == null || request.body.movieId == null || request.body.file_path == null) {
            response.sendStatus(400);
        } else {

            // verify if id is valid by checking using search service
            var movieId;
            connection.query("INSERT INTO moviefile (movieId,file_path) VALUES (?,?)", [request.body.movieId, request.body.file_path], (err, results) => {
                if (err) throw err
                console.log('Inserted ' + results.affectedRows + ' rows');
                response.sendStatus(200);
                movieId = results.insertId;
            })
        }
    },
    updateMovieById: (request, response) => {
        if (request.body == null || request.body.movieId == null || request.body.file_path == null) {
            response.sendStatus(400);
        } else {
            connection.query("UPDATE moviefile SET file_path = ? WHERE movieId = ?", [request.body.file_path, request.body.movieId], (err, result) => {
                if (err) throw err;
                console.log('Updated ' + result.affectedRows + ' rows');
                response.sendStatus(200);

            })
        }

    },
    deleteMovieFileById: (request, response) => {
        if (request.body == null || request.body.movieId == null) {
            response.sendStatus(400);
        } else {
            var fileToDelete;
            connection.query("SELECT file_path FROM moviefile WHERE movieId = ?", [request.body.movieId], (error, result) => {
                if (err) throw err;
                fileToDelete = result[0].file_path;
            })
            connection.query("DELETE FROM moviefile WHERE movieId = ?", [request.body.movieId], (err, result) => {
                if (err) throw err;
                console.log('Deleted ' + result.affectedRows + ' rows');
                response.sendStatus(200);
            });
            fs.unlinkSync(fileToDelete);
        }

    },
    getMovieById: (request, response) => {
        if (request.body == null || request.body.movieId == null) {
            response.sendStatus(400);
        } else {
            connection.query("SELECT file_path FROM moviefile WHERE movieId = ?", [request.body.movieId], (err, result) => {
                if (err) throw err;
                startStream(result[0].file_path, response, request);
            })

        }
    }

}