import { Router } from "express";
import { userController } from "../controllers/users";
import { userModel } from "../models/User";

const userRouter = Router();
userRouter.post('/', userController.insertUser);

export{
     userRouter
}