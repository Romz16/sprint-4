import{getCustomRepository} from "typeorm";
import { CoordinateRepositorios } from "../repositorios/CoordinateRepositorio";



interface ICoordinateCreate{
    latitude:string;
    longitude:string;
    email:string;
}


class CoordinateService{

    async create({latitude,longitude,email}: ICoordinateCreate){
        const coordinateRepositorio = getCustomRepository(CoordinateRepositorios);

        

        const coordinate = coordinateRepositorio.create({
            latitude,
            longitude,
            email
        });

        await coordinateRepositorio.save(coordinate);
    }

}

export {CoordinateService}