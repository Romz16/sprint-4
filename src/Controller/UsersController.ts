import{getCustomRepository} from "typeorm"
import { Request,Response } from "express"; 
import { UserService } from "../services/UserService";

class UsersController{

    async create(request:Request,response:Response):Promise<Response>{

        const {email,nome}=request.params;
        
        const usersService = new UserService();

        try{
            const users = await usersService.create({email,nome});

            return response.json(users);
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }

}

export{UsersController}