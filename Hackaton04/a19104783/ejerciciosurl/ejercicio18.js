function filtrar(...matriz) {
    let matriz2=[];

    let respuesta=matriz.filter(elemento=>Number.isInteger(elemento));
    matriz2.push(respuesta);
    return matriz2;
    
}

console.log(filtrar(1,2,3,4,5,"hola","como estas",true,7,6,8))


