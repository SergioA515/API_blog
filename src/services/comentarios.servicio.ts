/**
 * @author Sergio Alejadro Parra
 */
import { Comentarios } from "@prisma/client";
import { db } from "../config/db.server";
/** Operaciones CRUD/ Listar entidad @Comentarios de la base de datos */
export const listComentarios = async(): Promise<Comentarios[]> => {
    return db.comentarios.findMany({
        select: {
            id_comentarios: true,
            contenido_comentarios: true,
            fecha_comentarios: true,
            estado_comentarios: true,
            imagen_comentarios: true,
            usuario_comentarios_fk: true,
            publicacion_comentarios_fk: true,
        }
    });
};
// Obtener un comentario de la base de datos
export const getComentario = async(id_comentarios: number): Promise<Comentarios | null> => {
    return db.comentarios.findUnique({
        where: {
            id_comentarios: id_comentarios
        }
    });
};
// Crear un comentario 
export const createComentario = async(
    Comentario: Omit<Comentarios, 'id_comentarios, usuario_comentarios_fk, publicacion_comentarios_fk'>
    ): Promise<Comentarios> => {
        const {
            contenido_comentarios,
            fecha_comentarios,
            estado_comentarios,
            imagen_comentarios,
        } = Comentario;
    return db.comentarios.create({
        data: {
            contenido_comentarios,
            fecha_comentarios: new Date(fecha_comentarios),
            estado_comentarios,
            imagen_comentarios,
            usuario_comentarios_fk: Comentario.usuario_comentarios_fk,
            publicacion_comentarios_fk: Comentario.publicacion_comentarios_fk,
        },
        select: {
            id_comentarios: true,
            contenido_comentarios: true,
            fecha_comentarios: true,
            estado_comentarios: true,
            imagen_comentarios: true,
            usuario_comentarios_fk: true,
            publicacion_comentarios_fk: true,
        },
    });
};
// Actualizar un comentario
export const updateComentario = async(
    id_comentarios: number,
    Comentario: Omit<Comentarios, 'id_comentarios, usuario_comentarios_fk, publicacion_comentarios_fk'>
): Promise<Comentarios> => {
    const {
        contenido_comentarios,
        fecha_comentarios,
        estado_comentarios,
        imagen_comentarios,
    } = Comentario;
    return db.comentarios.update({
        where: {
            id_comentarios,
        },
        data: {
            contenido_comentarios,
            fecha_comentarios: new Date(fecha_comentarios),
            estado_comentarios,
            imagen_comentarios,
            usuario_comentarios_fk: Comentario.usuario_comentarios_fk,
        },
    });
};
// Eliminar un comentario
export const deleteComentario =async(id_comentarios:number): Promise<void> => {
    await db.comentarios.delete({
        where: {
            id_comentarios,
        },
    });
};
