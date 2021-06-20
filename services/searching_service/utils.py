from models.database import mydb
import os
'''
Get all users and their libraries
For each library go through files and check if file has a file path

'''

def check_libraries():
  mycursor = mydb.cursor()
  mycursor.execute("SELECT libraryPath FROM Users")
  myresult = mycursor.fetchall()

    

if __name__=="__main__":
  check_libraries()