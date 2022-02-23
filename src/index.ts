import dotenv from 'dotenv';

dotenv.config();

import express,{Request, Response} from 'express';
import { useRoutes } from './routes';

const PORT = process.env.PORT || 8080;

const app = express();

useRoutes(app);


app.get('/',(req: Request, res: Response) => {
    res.json({
        msg: 'ok'
    })
})

app.listen(PORT,() => console.log('Servidor is running in port ' +PORT));