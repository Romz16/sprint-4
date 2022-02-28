import express, { request, response } from "express";
import { createConnection } from "typeorm";

import "./database"
import { routes } from "./routes";
createConnection()
const app = express();

app.use(express.json());

app.use(routes);


export{app}