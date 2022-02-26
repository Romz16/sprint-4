import { Router } from "express";
import { CoordinatesController } from "./Controller/CoordinatesController";
import { UsersController } from "./Controller/UsersController";

const routes = Router();

const usersController = new UsersController();
const coordinatesController = new CoordinatesController();

routes.post("/AdicionarUsuario",usersController.create);
routes.put("/AlterarUsuario",usersController.update);
routes.delete("/RemoverUsuario",usersController.delete);

routes.post("/AdicionarPonto",coordinatesController.create);
routes.put("/AlteraPonto",coordinatesController.update);
routes.delete("/RemoverPonto",coordinatesController.delete);
routes.get("/MostrarPonto/:email",coordinatesController.showByUser);
routes.delete("/RemoverPonto",coordinatesController.delete);


export{routes};