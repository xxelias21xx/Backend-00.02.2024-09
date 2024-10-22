function sumacubos(a,b,c) {
    let arrcubo=[];
    arrcubo.push(a,b,c);
    let suma=0;
    for (let i = 0; i <arrcubo.length; i++) {
        suma+=Math.pow(arrcubo[i],3);
        
    }
    return suma
}

let respuesta=sumacubos(1,5,9);
console.log(respuesta);