  
require("dotenv").config()

module.exports = {
    PORT : process.env.PORT || 3001,
    HOSTNAME : process.env.HOST || 'localhost',
    SQL_USER : process.env.SQL_USER ,
    SQL_PASSWORD : process.env.SQL_PASSWORD,
    SQL_DATABASE:process.env.SQL_DATABASE,
    APP_URL : process.env.APP_URL, 
}