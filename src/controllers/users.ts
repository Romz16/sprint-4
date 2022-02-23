
import { Request,Response } from 'express';
import { userModel, User } from '../models/User';
import { badRequest, internalServerError } from '../services/util';


const insertUser = (req: Request, res: Response)=>{

    {
        const user = req.body.user;
        if(!user)
            return badRequest(res,"Usuario Invalido");

        if(!user.email)
            return badRequest(res, 'Informe o email');
        
        if(!user.nome)
            return badRequest(res, 'Informe o nome');
    }

    const user = req.body.user as User;
    userModel.insertUser(user)
        .then(id => (
            res.json(
                id
            )
        ))
        .catch(err => internalServerError(res,err));
}

export const userController = {
    insertUser
}