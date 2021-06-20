import flask
from flask import request, send_from_directory, abort, render_template, Response
from pathlib import Path
from flask.wrappers import Response
from flask_cors import cross_origin
from database import findMovieFile
from conversion import create_master_playlist
import re


app = flask.Flask(__name__)
app.config["DEBUG"] = True

#store these details in redis?
stream = 'stream_0'
movie_id = 1
moviePath = Path(findMovieFile(movie_id)[0])  # set movie path from a request

@app.route('/movies/watch/<string:id>',methods=['PUT']) #will break code if done while streaming the movie
def setMovie(id):
  movie_id=id
  moviePath = Path(findMovieFile(movie_id)[0])
  create_master_playlist(moviePath,'stream')
  return Response(status=200)


@app.route('/movies/<string:fileName>', methods=['GET'])
@cross_origin()
def movie(fileName):
    try:
        global stream
        global moviePath  # gives path to master playlist
        parent_directory = moviePath
        if((re.match(r"stream_[0-9]*.m3u8", fileName))):
            print(parent_directory, stream)
            stream = fileName
            return send_from_directory(parent_directory, stream)
        if(re.match(r"data[0-9]*.ts", fileName)):
            data_dir = parent_directory.joinpath(Path(stream).stem)
            return send_from_directory(data_dir, fileName)
        else:
            # downloads file
            return send_from_directory(parent_directory, 'master.m3u8')
    except FileNotFoundError:
        abort(404)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
