import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)

class UsersRepositorios extends Repository<User>{
    
}

export {UsersRepositorios}