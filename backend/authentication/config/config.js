require("dotenv").config()

module.exports= {
    port : process.env.PORT || 3002,
    sqlUser : process.env.SQL_USER || "root",
    sqlPassword:process.env.SQL_PASSWORD || "***REMOVED***",
    sqlDb : process.env.SQL_DB || "proflix",
    appUrl : process.env.APP_URL || "http://localhost:4000",

}