function minMax(...numeros){

    let maximo= Math.max(...numeros);
    let minimo=Math.min(...numeros);
    return[minimo,maximo];
}



console.log(minMax(1,2,3,4,5))