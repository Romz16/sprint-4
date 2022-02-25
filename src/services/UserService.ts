import{getCustomRepository} from "typeorm";
import { UsersRepositorios } from "../repositorios/UsersRepositorios";



interface IUserCreate{
    email:string;
    nome:string;
}


class UserService{

    async create({email,nome}: IUserCreate){
        const usersRepositorios = getCustomRepository(UsersRepositorios);

        const userAlreadyExists = await usersRepositorios.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error ("User already exists!");
        }

        const users = usersRepositorios.create({
            email,
            nome
        });

        await usersRepositorios.save(users);
    }

}

export {UserService}