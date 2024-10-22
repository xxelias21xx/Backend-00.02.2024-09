function convertir(objeto){

    let respuesta=Object.entries(objeto);
    return respuesta
    
}

let objeto1={
    likes:2,
    dislikes:3,
    followers:10
}

console.log(convertir(objeto1));