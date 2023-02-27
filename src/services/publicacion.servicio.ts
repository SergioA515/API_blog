/**
 * @author Sergio Alejadro Parra
 */
import { Publicaciones } from '@prisma/client';
import { db } from '../config/db.server';
// Operaciones CRUD/ Listar entidad de la base de datos
export const listPublicaciones = async (): Promise<Publicaciones[]> => {
    return db.publicaciones.findMany({
        select:{
            id_publicaciones:true,
            titulo_publicaciones:true,
            contenido_publicaciones:true,
            fecha_publicaciones:true,
            estado_publicaciones:true,
            imagen_publicaciones:true,
            comentarios:true,
            usuario_publicaciones_fk:true,
            categoria_publicaciones_fk: true,
        },  
    });
};
// Obtener las publiaciones de la base de datos 
export const getPublicacion = async (id_publicaciones:number): Promise<Publicaciones | null> => {
    return db.publicaciones.findUnique ({ 
        where: {
            id_publicaciones :id_publicaciones
        },
    });
};
// Crear las publiaciones
export const createPublicacion = async (
    Publicacion: Omit<Publicaciones, "id_publiciones" >
): Promise<Publicaciones> => {
    const {
        titulo_publicaciones,
        contenido_publicaciones,
        fecha_publicaciones,
        estado_publicaciones,
        imagen_publicaciones,
        usuario_publicaciones_fk,
        categoria_publicaciones_fk
    } = Publicacion;
    return db.publicaciones.create({
        data: {
            titulo_publicaciones,
            contenido_publicaciones,
            fecha_publicaciones,
            estado_publicaciones,
            imagen_publicaciones,
            usuario_publicaciones_fk,
            categoria_publicaciones_fk,
        },
        select: {
            id_publicaciones: true,
            titulo_publicaciones:true,
            contenido_publicaciones:true,
            fecha_publicaciones:true,
            estado_publicaciones:true,
            imagen_publicaciones:true,
            usuario_publicaciones_fk:true,
            categoria_publicaciones_fk:true,
        },
    });
};
// Actualizar una publiacion 
export const updatePublicacion = async (
    id_publicaciones: number,
    Publicacion: Omit<Publicaciones, "id_publicaciones">
): Promise<Publicaciones> => {
    const {
        titulo_publicaciones,
        contenido_publicaciones,
        fecha_publicaciones,
        estado_publicaciones,
        imagen_publicaciones,
    } = Publicacion;
    return db.publicaciones.update({
        where: {
            id_publicaciones,
        },
        data: {
            titulo_publicaciones,
            contenido_publicaciones,
            fecha_publicaciones,
            estado_publicaciones,
            imagen_publicaciones,
        },
    });
};
// Eliminar una publicacionde la base de datos
export const deletePubliciones = async(id_publicaciones: number): Promise<void> => {
    await db.publicaciones.delete({
        where: {
            id_publicaciones,
        },
    });
};
