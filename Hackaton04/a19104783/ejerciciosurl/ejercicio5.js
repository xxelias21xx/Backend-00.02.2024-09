function filtrar(...valores){
    let respuesta=valores.filter(element=> typeof element ==="string");
    return respuesta
}



console.log(filtrar(1,2,3,4,5,"carlos","pelota"));