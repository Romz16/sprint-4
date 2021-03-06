import{getCustomRepository} from "typeorm"
import { request, Request,Response } from "express"; 
import { CoordinateService } from "../services/CoordinatesService";

class CoordinatesController{

    async create(request:Request,response:Response):Promise<Response>{

        const {latitude,longitude,email}=request.query as{latitude:string,longitude:string,email:string};
        
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

    async delete(request:Request,response:Response):Promise<Response>{
        const{id, email}=request.query;
        
        const coordinatesService = new CoordinateService();

        try{
            await coordinatesService.delete(String(id), String(email));

            return response.json({
                message: "coordinates have been deleted"
            });
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const {email, id,latitude,longitude} = request.query as {email: string, id: string,latitude:string,longitude:string};
        const coordinateService = new CoordinateService();

        try{
            await coordinateService.update(email, id,latitude,longitude);

            return response.json({
                message: "pont have been updated"
            });
        }catch(err){
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async showByUser(request:Request,response:Response){
        const{ email } = request.params

        const coordinatesService = new CoordinateService();

        const list = await coordinatesService.ListByUser(email);

        return response.json(list);
    }

}

export{CoordinatesController}