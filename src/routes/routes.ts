import { Router } from "express";
import { userController } from "../controllers/users";
import { pontoController } from "../controllers/ponto";

const userRouter = Router();
userRouter.post('/', userController.insertUser);

const pontoRouter = Router();
pontoRouter.post('/p',pontoController.insertPonto);


export{
     userRouter,
     pontoRouter
}