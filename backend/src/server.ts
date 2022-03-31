import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import "./database"


const server = express();
server.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
server.use(express.json())
server.use(routes)

server.listen(3300, () => console.log("Server is running"))