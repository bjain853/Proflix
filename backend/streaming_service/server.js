const express = require("express")
const config = require("./config")
const server = express();
//const cors = require("cors");
const mainRouter = require("./routes/index");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use("/api",mainRouter);

server.get("/", (req, res) => {
    res.send("<h1> Welcome to home page of API </h1>")
});

server.listen(config.PORT, () => {
    console.log(`Running on PORT ${config.PORT}`)
});