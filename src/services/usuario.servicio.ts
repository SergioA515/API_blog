import { Usuarios } from '@prisma/client';
import { db } from '../config/db.server';

// type Usuarios = {
    // NIP_usuarios:      number,
    // nombre_usuarios:   string,
    // apellido_usuarios: string,
    // email_usuarios:    string,
    // genero_usuarios:   string,
    // sede_usuarios:    string,
    // rol_usuarios:      string,
    // estado_usuarios:   number,
    // pass_usuarios:     string,
    // fecha_usuarios:    Date,
    // imagen_usuarios:   Buffer,
// };

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
        },
    });
};

export const createUsuario = async (
    Usuario: Omit<Usuarios, "NIP_usuarios"> 
): Promise<Usuarios> => {
    const {
        nombre_usuarios, 
        apellido_usuarios,
        email_usuarios,
        genero_usuarios,
        sede_usuarios,
        rol_usuarios,
        estado_usuarios,
        pass_usuarios,
        fecha_usuarios,
        imagen_usuarios
    } = Usuario;
    return db.usuarios.create({
        data: {      
            nombre_usuarios, 
            apellido_usuarios,
            email_usuarios,
            genero_usuarios,
            sede_usuarios,
            rol_usuarios,
            estado_usuarios,
            pass_usuarios,
            fecha_usuarios: new Date(),
            imagen_usuarios,
        },
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
export const updateUsuario = async (
    NIP_usuarios:number,
    Usuario: Omit<Usuarios, "NIP_usuarios"> 
): Promise<Usuarios> => {
    const {
        nombre_usuarios, 
        apellido_usuarios,
        email_usuarios,
        genero_usuarios,
        sede_usuarios,
        rol_usuarios,
        estado_usuarios,
        pass_usuarios,
        fecha_usuarios,
        imagen_usuarios
    } = Usuario;
    return db.usuarios.update({
        where: {
            NIP_usuarios,
        },
        data: {
            nombre_usuarios, 
            apellido_usuarios,
            email_usuarios,
            genero_usuarios,
            sede_usuarios,
            rol_usuarios,
            estado_usuarios,
            pass_usuarios,
            fecha_usuarios,
            imagen_usuarios
        }
    });
}

export const deleteUsuario = async (NIP_usuarios:number): Promise<void> => {
    await db.usuarios.delete({
        where: {
            NIP_usuarios,
        },
    });
}
