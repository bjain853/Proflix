const express = require("express");
const server = express();
const config = require("./config/config");
const authentication = require("./Routes/authentication");
const session = require("express-session");
const passport = require("passport");


/****Middlewares***********/
server.use(express.urlencoded({extended:false}));
server.use(express.json())
server.use(session({
    secret:"authentication",
    resave:true,
    saveUninitialized:true,
}))
server.use(passport.initialize());
server.use(passport.session());
require("./config/passport")(passport);

/****** Routes ****/
server.use("/api",authentication);

/**Start server*****/
server.listen(config.port,()=>{
    console.log(`Listening @ Port:${config.port}`)
})