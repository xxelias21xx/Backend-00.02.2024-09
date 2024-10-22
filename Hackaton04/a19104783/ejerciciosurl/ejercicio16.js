function numero_descendiente(numero) {
    let matriz=[];

    for (let i = numero; i>=0; i--) {
        
        matriz.push(i)
    }
    return matriz;


    
}

console.log(numero_descendiente(5));


