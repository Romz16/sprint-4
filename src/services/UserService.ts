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
        return users;
    }

    async update(email: string, newName: string) {
        const usersRepositorios = getCustomRepository(UsersRepositorios);
        const user = await usersRepositorios.findOne({
            email
        });
        console.log(user);

        if (!user) throw new Error('user not found')
            
        user.nome = newName;
        try { 
            await usersRepositorios.save(user); 
        } catch (error) {
            throw new Error('fail to update')
        }
        
    }

    async delete(email: string) {
        const usersRepositorios = getCustomRepository(UsersRepositorios);
        const user = await usersRepositorios.findOne({
            email
        });

        if (user) {
            try { 
                await usersRepositorios.delete(user.id) 
            } catch (error) {
                throw new Error('fail to remove')
            }
        }
    }
}

export {UserService}