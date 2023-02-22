//importacion de paquetes :p
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { PrismaClient, Usuarios } from "@prisma/client";
import { Request, Response } from 'express';
import * as UsuarioServicio from "./services/usuario.servicio"; 

// Se crea y configura el servidor Express con sus librerias
dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

//enrutamiento & metodos HTTP usuario
export const usuarioRouter = express.Router();
//GET Lista /usuarios
usuarioRouter.get("/", async (req: Request, res: Response)=>{
    try {
        const usuarios = await UsuarioServicio.listUsuarios();
        return res.status(200).json(usuarios);
    } catch (error:any) {
        return res.status(500).json(error.message);
    }
})
app.use("/api/usuarios",usuarioRouter);
//POST /usuarios
usuarioRouter.post("/", async (req: Request, res: Response)=>{
    try {
        const usuario = await UsuarioServicio.createUsuario(req.body);
        return res.status(201).json(usuario);
    } catch (error:any) {
        return res.status(500).json(error.message);
    }
})
app.use("/api/usuarios",usuarioRouter);

//Variable de puerto
const PORT = 3000;
//Metodo para escuchar el puerto y visualizarlo por el navegador
app.listen(PORT, () =>{
    console.log("Server corriendo uwu on port", PORT);
})

