function objeto(valor) {
    
    let respuesta=Object.entries(valor)//añadimos el objeto a la variable repsuesta
    return respuesta;//ahora la variable respuesta es un array y la mandamos a imprimir
    
}


let objfutbol={
    nombre:"carlos",
    edad:23
}




console.log(objeto(objfutbol))