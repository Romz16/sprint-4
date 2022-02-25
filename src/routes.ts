import { Router } from "express";
import { CoordinatesController } from "./Controller/CoordinatesController";
import { UsersController } from "./Controller/UsersController";

const routes = Router();

const usersController = new UsersController();
const coordinatesController = new CoordinatesController();

routes.post("/users/:email/:nome",usersController.create);
routes.post("/coordinates/:latitude/:longitude/:email",coordinatesController.create);

routes.get("/coordinates/:email",coordinatesController.showByUser);

routes.delete("/coodinates/:id/:email",coordinatesController.delete);


export{routes};