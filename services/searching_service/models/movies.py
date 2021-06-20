from models.database import mydb


class MoviesModel:
    def __init__(self,movie_id,title,year,genres,isAdult,runTimeMinutes,avgRating,filePath,posterUrl):
        self.movie_id = movie_id
        self.title = title
        self.year =year
        self.genres = genres
        self.isAdult = isAdult
        self.runTimeMinutes = runTimeMinutes
        self.avgRating =avgRating
        self.filePath = filePath
        self.posterUrl =posterUrl
    
    def get_movie(movie_id):
        pass

    def update_movie(movie_id,field,update):
        pass
    
    def delete_movie(movie_id):
        pass
    
    def add_movie(movie):
        pass



    def __repr__(self):
        return f"Movie has {movie_id} with filePath {filePath}"



