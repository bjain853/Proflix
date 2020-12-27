const express = require("express");
const server = express();
const config = require("./config/config");
const authentication = require("./Routes/authentication");
const session = require("express-session");




/****Middlewares***********/
server.use(express.urlencoded({extended:false}));
server.use(express.json())
server.use(session({
    secret:"proflix server",
    resave:true,
    saveUninitialized:true,
}))

/****** Routes ****/
server.use("/api",authentication);
server.get("/",(req,res)=>{
    res.send("<h1>Welcome to Homepage of localhost:3002 api </h1>");
})

/**Start server*****/
server.listen(config.port,()=>{
    console.log(`Listening @ Port:${config.port}`)
})