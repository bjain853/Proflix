import sys
import mariadb


def connectDB():
    try:
        conn = mariadb.connect(
            user="connpy_test",
            password="passwd",
            host="localhost",
            port=3306)
        return conn
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)



