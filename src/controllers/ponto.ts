
import { Request,Response } from 'express';
import { pontoModel, Ponto } from '../models/Ponto';
import { badRequest, internalServerError } from '../services/util';


const insertPonto = (req: Request, res: Response)=>{

    {
        const ponto = req.body;
        if(!ponto)
            return badRequest(res,"Ponto Invalido");

        if(!ponto.latitude)
            return badRequest(res, 'Informe a latitude');
        
        if(!ponto.longitude)
            return badRequest(res, 'Informe a longitude');

        if(!ponto.email)
            return badRequest(res, 'Informe o email');
    }

    const ponto = req.body as Ponto;
    pontoModel.insertPonto(ponto)
        .then(email => (
            res.json(
                email
            )
        ))
        .catch(err => internalServerError(res,err));
}

export const pontoController = {
    insertPonto
}