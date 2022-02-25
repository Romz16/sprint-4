import{getCustomRepository} from "typeorm";
import { CoordinateRepositorios } from "../repositorios/CoordinateRepositorio";
import { UsersRepositorios } from "../repositorios/UsersRepositorios";



interface ICoordinateCreate{
    latitude:string;
    longitude:string;
    email:string;
    
}

interface ICoordinateDelete{
    id: string;
    email:string;
}


class CoordinateService{

    async create({latitude,longitude,email}: ICoordinateCreate){
        const coordinateRepositorios = getCustomRepository(CoordinateRepositorios);
        const usersemail = getCustomRepository(UsersRepositorios);

        const usernotExists = await usersemail.findOne({
            email
        });
        
        if(!usernotExists){
           throw new Error ("User  not exists!");
        }

        const pointExists = await coordinateRepositorios.findOne({
            latitude,
            longitude
        })

        if(pointExists){
            throw new Error ("Point already exists!");
        }

        const coordinate = coordinateRepositorios.create({
            latitude,
            longitude,
            email,
        });

        await coordinateRepositorios.save(coordinate);
        return coordinate;
    }

    async delete({id,email}:ICoordinateDelete){
        const coordinateRepositorios = getCustomRepository(CoordinateRepositorios);
        const usersemail = getCustomRepository(UsersRepositorios);

        
        const coordinate = coordinateRepositorios.delete({
            id,
            email,
        });
    }

    async ListByUser(email:string){
        const coordinateRepositorios = getCustomRepository(CoordinateRepositorios);

        const list = await coordinateRepositorios.find({
            email
        });

        return list;
    }

}

export {CoordinateService}