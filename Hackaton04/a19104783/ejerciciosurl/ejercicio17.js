function minmax(matriz) {
    let max= Math.max(...matriz);
    let min=Math.min(...matriz);

    let diferencia =max-min;

    
    return `el numero maximo es ${max}, y el numero minimo es ${min} y la diferencia es ${diferencia}`;
    
}
let arrnumeros=[1,-2,3,4,-5,6]
console.log(minmax(arrnumeros))