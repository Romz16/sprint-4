import {  Application, Router } from 'express';
import { userRouter } from './routes';



export const useRoutes = (app:Application) =>{
    const  apiRouter = Router();
    apiRouter.use('/user',userRouter);
    app.use('/api/v1',apiRouter);

}

export const pontoRoutes = (app:Application) =>{
    const  apiRouter = Router();
    apiRouter.use('/ponto',userRouter);
    app.use('/api/v1',apiRouter);

}