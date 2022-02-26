import{getCustomRepository} from "typeorm"
import { Request,Response } from "express"; 
import { UserService } from "../services/UserService";

class UsersController{

    async create(request:Request,response:Response):Promise<Response>{

        const {email,nome}=request.query as {email: string,nome: string};
        
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

    async update(request: Request, response: Response): Promise<Response> {
        const {email, nome} = request.query as {email: string, nome: string};
        const userService = new UserService();

        try{
            await userService.update(email, nome);

            return response.json({
                message: "user have been updated"
            });
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async delete(request:Request,response:Response):Promise<Response>{
        const{email}=request.query;
        const userService = new UserService();

        try{
            await userService.delete(email as string);

            return response.json({
                message: "user have been deleted"
            });
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }

}

export{UsersController}