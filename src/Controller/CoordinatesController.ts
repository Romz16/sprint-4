import{getCustomRepository} from "typeorm"
import { Request,Response } from "express"; 
import { CoordinateService } from "../services/CoordinatesService";

class CoordinatesController{

    async create(request:Request,response:Response):Promise<Response>{

        const {latitude,longitude,email}=request.body;
        
        const coordinatesService = new CoordinateService();

        try{
            const coordinates = await coordinatesService.create({latitude,longitude,email});

            return response.json(coordinates);
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }

}

export{CoordinatesController}