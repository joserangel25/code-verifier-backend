"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration .env file
dotenv_1.default.config();
//Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Definir primera ruta de la aplicacion
app.get('/', (req, res) => {
    //Send hello world
    res.send('Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    //Send hello world
    res.send('Welcome to GET Route: ¡Hello!');
});
//Ejecutar nuestra aplicacion y escuchar las peticiones al puerto
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map