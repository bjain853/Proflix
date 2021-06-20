from flask_restful import reqparse,abort,Resource
from models.movies import MoviesModel


class Movie(Resource):
    
    def get(self,movie_id):
        result = MoviesModel.get_movie(movie_id)
        print(result)
        if not result:
            abort(404, message="Could not find video with that id")
        return result
    
    def patch(self,movie_id):
        return {"data":"put request"}


    def delete(self,movie_id):
        return {"data":"delete request"}


