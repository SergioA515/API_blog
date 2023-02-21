//importacion de paquetes :p
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { PrismaClient, Usuarios } from "@prisma/client";
import { Request, Response } from 'express';
 
// Se crea y configura el servidor Express con sus librerias
dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

//enrutamiento metodos HTTP usuario
// const usuario: Usuarios[] = [];
// function getUsuarios(usuarios: Usuarios[]): (req: Request, res: Response) => void {
//     return (req: Request, res: Response) => {
//         res.json(usuarios);
//     }
// }
// app.get('/usuario.servcio', getUsuarios(usuario));



//Variable de puerto
const PORT = 3000;
//Metodo para escuchar el puerto y visualizarlo por el navegador
app.listen(PORT, () =>{
    console.log("Server corriendo uwu on port", PORT);
})
