function nombres(matriz) {
 
    let respuesta=matriz.map((matriz)=>matriz.nombre)
    return respuesta;
    
}

let nombre=[
    {nombre:"carlos", edad:23},
    {nombre:"miguel", edad:23},
    {nombre:"daniel", edad:23},

]

console.log(nombres(nombre));