import dotenv from 'dotenv';

dotenv.config();

import express,{Request, Response} from 'express';
import { useRoutes } from './routes';
import bodyParser  from 'body-parser';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

//app.use(express.json());
useRoutes(app);


app.get('/',(req: Request, res: Response) => {
    res.json({
        msg: 'ok'
    })
})

app.listen(PORT,() => console.log('Servidor is running in port ' +PORT));