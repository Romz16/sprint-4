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

    async ListByUser(email:string){
        const coordinateRepositorios = getCustomRepository(CoordinateRepositorios);

        const list = await coordinateRepositorios.find({
            email
        });

        return list;
    }

    async update(email: string,id:string, newLatitude:string,newLongitude: string) {
        const  coordinateRepositorios = getCustomRepository(CoordinateRepositorios);
        const coordinate = await coordinateRepositorios.findOne({
            email,
            id
        });
        console.log(coordinate);

        if (!coordinate) throw new Error('coordinate not found')
            
        coordinate.latitude = newLatitude;
        coordinate.longitude = newLongitude;
        try { 
            await coordinateRepositorios.save(coordinate); 
        } catch (error) {
            throw new Error('fail to update')
        }
        
    }

    async delete(id: string, email: string) {
        const coordinateRepositorios = getCustomRepository(CoordinateRepositorios);        
        const coordinate = await coordinateRepositorios.findOne({
            id, email
        });
        
        if (coordinate) {
            try {
                await coordinateRepositorios.delete(coordinate.id);
            } catch (error) {
                throw new Error('fail to remove')
            }
        }
    }   
}

export {CoordinateService}