function sumar(...numeros){
    let suma=numeros.reduce((total,num)=>total+num,0);
    return suma;
}

console.log(sumar(1,2,3,4,5));