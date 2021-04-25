require("dotenv").config()

module.exports = {
    port: process.env.AUTH_PORT || 3000,
    sqlUser: process.env.SQL_USER || "root",
    sqlPassword: process.env.SQL_PASSWORD,
    sqlDb: process.env.SQL_DB || "proflix",
    appUrl: process.env.APP_URL || "http://localhost:4000",
    sqlHost: process.env.SQL_HOST || "localhost"

}