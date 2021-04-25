  
require("dotenv").config()

module.exports = {
    PORT : process.env.STREAMING_PORT || 4002,
    HOSTNAME : process.env.HOST || 'localhost',
    MONGO_URL : process.env.MONGODB_URI,
    SQL_USER : process.env.SQL_USER ,
    SQL_PASSWORD : process.env.SQL_PASSWORD,
    DB:process.env.SQL_DATABASE,
    APP_URL : process.env.APP_URL, 
}

