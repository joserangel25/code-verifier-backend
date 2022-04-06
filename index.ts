import express, { Express, Request, Response } from 'express'; 
import dotenv from 'dotenv';

//Configuration .env file
dotenv.config();

//Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Definir primera ruta de la aplicacion
app.get('/', (req: Request, res: Response) => {
    //Send hello world
    res.send('Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose')
})

app.get('/hello', (req: Request, res: Response) => {
    //Send hello world
    res.send('Welcome to GET Route: ¡Hello!')
})

//Ejecutar nuestra aplicacion y escuchar las peticiones al puerto
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})