/**
 * @author Sergio Alejadro Parra
 */
import { Categorias } from "@prisma/client"
import { db } from "../config/db.server"
/** Operaciones CRUD/ Listar entidad @Categorias de la base de datos */
export const listCategorias =async (): Promise<Categorias[]> => {
    return db.categorias.findMany({
        select:{
            id_categorias: true,
            nombre_categorias: true,
        }
    })
}
// obtener Categoria
export const getCategoria = async (id_categorias:number): Promise<Categorias | null> => {
    return db.categorias.findUnique({
        where:{
            id_categorias,
        },
    });
};
// crear Categoria
export const createCategoria = async (
    Categoria: Omit<Categorias, "id_categorias">
): Promise<Categorias> => {
    const {
        nombre_categorias,
    } = Categoria;
    return db.categorias.create({
        data: {
            nombre_categorias,
        },
        select: {
            id_categorias: true,
            nombre_categorias:true,
        },
    });
};
// Actualizar Categoria
export const updateCategoria = async (
    id_categorias: number,
    Categoria: Omit<Categorias, "id_categorias">
): Promise<Categorias> => {
    const {
        nombre_categorias,
    } = Categoria;
    return db.categorias.update({
        where: {
            id_categorias,
        },
        data: {
            id_categorias,
            nombre_categorias
        },
    });
};
// eliminar Categorias
export const deleteCategoria =async (id_categorias:number): Promise <void> => {
    await db.categorias.delete({
        where: {
            id_categorias,
        },
    });
};