import{getCustomRepository} from "typeorm";
import { CoordinateRepositorios } from "../repositorios/CoordinateRepositorio";



interface ICoordinateCreate{
    latitude:string;
    longitude:string;
    email:string;
    
}


class CoordinateService{

    async create({latitude,longitude,email}: ICoordinateCreate){
        const coordinateRepositorios = getCustomRepository(CoordinateRepositorios);

        //const coordinateAlreadyExists = await coordinateRepositorios.findOne({
          //  email
      //  });

        //if(userAlreadyExists){
          //  throw new Error ("User already exists!");
        //}

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