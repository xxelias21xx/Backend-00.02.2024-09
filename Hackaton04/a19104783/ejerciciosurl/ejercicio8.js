let a=[1,2,3,4,5,6];
let b=[7,8,9,19,11];
let c=[12,13,14,15];
let d=[];
d.push(a,b,c);

function submatriz(matriz){
    let respuesta=matriz.map(submatriz => Math.max(submatriz));
    return respuesta;
}



console.log(submatriz(d))