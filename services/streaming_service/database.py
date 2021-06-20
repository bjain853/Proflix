import mysql.connector
from dotenv import dotenv_values,find_dotenv

env_values = dotenv_values(find_dotenv())

mydb = mysql.connector.connect(
  host=env_values.get('SQL_HOST'),
  user=env_values.get('SQL_USER'),
  password=env_values.get('SQL_PASSWORD'),
  database=env_values.get('SQL_DB')
)

def findMovieFile(id):
  mycursor = mydb.cursor()
  mycursor.execute(f"SELECT file_path FROM Movies where movie_id={id}")
  movies = mycursor.fetchall()
  if(len(movies)==0):
    raise Exception('Invalid id provided')
  else:
    return movies[0]
  
  