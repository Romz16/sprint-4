import { Router } from "express";
import { CoordinatesController } from "./Controller/CoordinatesController";
import { UsersController } from "./Controller/UsersController";

const routes = Router();

const usersController = new UsersController();
const coordinatesController = new CoordinatesController();

routes.post("/users",usersController.create);
routes.post("/coordinates",coordinatesController.create);


export{routes};