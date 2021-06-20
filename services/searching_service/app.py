from flask import Flask
from flask_restful import Api
from routes.movies import Movie

app = Flask(__name__,instance_relative_config=False)

api = Api(app,catch_all_404s=True)

api.add_resource(Movie,'/<int:movie_id>')

if __name__ == "__main__":
    #when server starts it should : 1. make sure it can connect to both databases 2. See that all files are there
   app.run(debug=True)