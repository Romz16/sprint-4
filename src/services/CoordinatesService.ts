import{getCustomRepository} from "typeorm";
import { CoordinateRepositorios } from "../repositorios/CoordinateRepositorio";
import { UsersRepositorios } from "../repositorios/UsersRepositorios";



interface ICoordinateCreate{
    latitude:string;
    longitude:string;
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

}

export {CoordinateService}