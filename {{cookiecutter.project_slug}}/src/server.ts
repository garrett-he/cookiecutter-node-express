import path from "path";
import express from "express";
import bodyParser from "body-parser";
import {Sequelize} from "sequelize-typescript";
import HelloRoute from "./routes/hello.route";
import UserRoute from "./routes/user.route";

export function createServer()
{
    const server = express();
    server.use(bodyParser.json());

    const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: process.env["DB_FILE"]
    });
    sequelize.addModels([path.resolve(__dirname, "entities")])

    server.use("/hello", HelloRoute());
    server.use("/users", UserRoute());

    return server;
}