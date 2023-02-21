import { blob, buffer } from "stream/consumers";
import {db} from "../src/config/db.server";
/**  semillas para la base de datos */

type Usuario = {
    nombre_usuarios: string ;
    apellido_usuarios: string;
    email_usuarios: string;
    genero_usuarios: string;
    sede_usuarios: string;
    pass_usuarios: string;
    fecha_usuarios: Date;
    imagen_usuarios: Buffer;
    estado_usuarios: number;
}

type Comentario = {
    contenido_comentarios: string;
    fecha_comentarios: Date;
    estado_comentarios: number;
    imagen_comentarios: Buffer;
    usuario_comentarios_fk: number;
    publicacion_comentarios_fk: number;
}
type Publicacion = { 
    titulo_publicaciones: string;
    contenido_publicaciones: string;
    fecha_publicaciones: Date;
    estado_publicaciones: number; 
    imagen_publicaciones: Buffer;
    comentarios: Comentario[];
    usuario_publicaciones_fk: number;
    categoria_publicaciones_fk: number;
  }
type Categoria = {
    id_categorias: number;
    nombre_categorias: String;
}

/*
creamos la funcion seed()'sembrar', para el ingreso de datos
*/
async function seed() {
    await Promise.all(
        getUsuarios().map((usuario) => {
            return db.usuarios.create({
                data: {
                    nombre_usuarios: usuario.nombre_usuarios,
                    apellido_usuarios: usuario.apellido_usuarios,
                    email_usuarios: usuario.email_usuarios,
                    genero_usuarios: usuario.genero_usuarios,
                    sede_usuarios: usuario.sede_usuarios,
                    pass_usuarios: usuario.pass_usuarios,
                    fecha_usuarios: usuario.fecha_usuarios,
                    imagen_usuarios: usuario.imagen_usuarios,
                    estado_usuarios: usuario.estado_usuarios,
                },
            });
        })
    );
    const usuario = await db.usuarios.findFirst({
        where: {
            NIP_usuarios: 0,
        }
    });

    // await Promise.all(
    //     getPublicacion().map((publicacion) => {
    //         return db.publicaciones.create({
    //             data: {
    //                 id_publicaciones:0,
    //                 titulo_publicaciones: publicacion.titulo_publicaciones,
    //                 contenido_publicaciones: publicacion.contenido_publicaciones,
    //                 fecha_publicaciones: publicacion.fecha_publicaciones,
    //                 estado_publicaciones: publicacion.estado_publicaciones,
    //                 imagen_publicaciones: publicacion.imagen_publicaciones,
    //                 usuario_publicaciones_fk: publicacion.usuario_publicaciones_fk,
    //                 categoria_publicaciones_fk: publicacion.categoria_publicaciones_fk,
    //             },
    //         });
    //     })
    // )
    // await Promise.all(
    //     getComentarios().map((comentario) => {
    //         return db.comentarios.create({
    //             data: { 
    //                 id_comentarios: 0, 
    //                 contenido_comentarios: comentario.contenido_comentarios, 
    //                 fecha_comentarios: comentario.fecha_comentarios,
    //                 estado_comentarios: comentario.estado_comentarios,
    //                 imagen_comentarios: comentario.imagen_comentarios,
    //                 usuario_comentarios_fk: comentario.usuario_comentarios_fk,
    //                 publicacion_comentarios_fk: comentario.publicacion_comentarios_fk,
    //             },
    //         });
    //     })
    // )
};
// let datoBlob:Blob = usuario?.imagen_usuarios;
    // datoBlob.arrayBuffer().then((Buffer) => {
    //     const mybuffer = new Blob([Buffer], { type: "image/jpeg" });
    //     })
    // const image = usuario?.imagen_usuarios;
    // const Mybuffering = Buffer.from(image); 
seed();

function getUsuarios(): Array<Usuario> {
    return [
        {
            nombre_usuarios: "Sergio Alejandro",
            apellido_usuarios: "Parra Toro",
            email_usuarios: "sergioparra@mail.com",
            genero_usuarios: "masculino",
            sede_usuarios: "sede 1",
            pass_usuarios: "1234567890",
            fecha_usuarios: new Date(),
            imagen_usuarios: Buffer.alloc(255),
            estado_usuarios: 1,
        },
        {
            nombre_usuarios: "Thomas",
            apellido_usuarios: "Giraldo",
            email_usuarios: "thomasg@mail.com",
            genero_usuarios: "masculino",
            sede_usuarios: "sede 2",
            pass_usuarios: "1234567890",
            fecha_usuarios: new Date(),
            imagen_usuarios: Buffer.alloc(255),
            estado_usuarios: 1,
        },
    ];
}

// function getPublicacion(): Array<Publicacion> {
//     return [
//         {
//             titulo_publicaciones: "Progrmación en Node.js",
//             contenido_publicaciones: "Etiam tellus erat, sollicitudin sit amet enim at, dictum laoreet metus. Aenean vitae neque quis augue lobortis facilisis a a ex. Donec ut ultrices diam.",
//             fecha_publicaciones: new Date(),
//             estado_publicaciones: 1, 
//             imagen_publicaciones: Buffer.alloc(100),
//             usuario_publicaciones_fk: 0,
//             categoria_publicaciones_fk: 0,  
//             comentarios: [],
//         },
//         {
//             titulo_publicaciones: "Progrmación en javascript",
//             contenido_publicaciones: "Etiam tellus erat, sollicitudin sit amet enim at, dictum laoreet metus. Aenean vitae neque quis augue lobortis facilisis a a ex. Donec ut ultrices diam.",
//             fecha_publicaciones: new Date(),
//             estado_publicaciones: 1, 
//             imagen_publicaciones: Buffer.alloc(100),
//             usuario_publicaciones_fk: 0,
//             categoria_publicaciones_fk: 0,
//             comentarios: [],
//         },
//     ];
// }

// function getComentarios(): Array<Comentario> {
//     return [
//         {
//             contenido_comentarios: "",
//             fecha_comentarios: new Date(),
//             estado_comentarios: 1, 
//             imagen_comentarios: Buffer.alloc(255),
//             usuario_comentarios_fk: 0, 
//             publicacion_comentarios_fk: 0,   
//         },
//         {
//             contenido_comentarios: "",
//             fecha_comentarios: new Date(),
//             estado_comentarios: 1, 
//             imagen_comentarios: Buffer.alloc(255),
//             usuario_comentarios_fk: 0, 
//             publicacion_comentarios_fk: 0,
//         },
//     ];
// }