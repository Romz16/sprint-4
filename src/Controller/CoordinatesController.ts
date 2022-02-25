import{getCustomRepository} from "typeorm"
import { Request,Response } from "express"; 
import { CoordinateService } from "../services/CoordinatesService";

class CoordinatesController{

    async create(request:Request,response:Response):Promise<Response>{

        const {latitude,longitude,email}=request.body;
        
        const coordinatesService = new CoordinateService();

    
        const coordinates = await coordinatesService.create({latitude,longitude,email});

        return response.json(coordinates);
       
    }

}

export{CoordinatesController}