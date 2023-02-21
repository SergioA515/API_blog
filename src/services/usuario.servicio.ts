import { Comentarios, Publicaciones, Usuarios } from '@prisma/client';
import { db } from '../config/db.server';

type Usuario = {
    id:number;
    nombre: string;
    apellido: string;
    genero: string;
    email: string;
    password: string;
    sede: string;
    fecha: Date;
    imagen: Buffer;
    estado: number;
    comentario: Comentarios[];
    publicacion: Publicaciones[];
};

export const listUsuarios = async (): Promise<Usuarios[]> => {
    return db.usuarios.findMany({
        select:{
            NIP_usuarios: true,
            nombre_usuarios: true,
            apellido_usuarios: true,
            email_usuarios: true,
            genero_usuarios: true,
            sede_usuarios: true,
            rol_usuarios: true,
            estado_usuarios: true,
            pass_usuarios: true,
            fecha_usuarios: true,
            imagen_usuarios: true,
        },
    });
};

export const getUsuario = async (NIP_usuarios:number): Promise<Usuarios | null> =>{
    return db.usuarios.findUnique({
        where:{
            NIP_usuarios: NIP_usuarios
        }
    });
}

