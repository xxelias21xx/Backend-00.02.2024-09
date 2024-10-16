// 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
let datos = [];
let sumaPar = 0, sumaImpar = 0, contPar = 0, contImpar = 0, input;
for (let i = 0; i <= 9; i++) {
    input = prompt("Ingrese el Numero "+ Number(i+1)+ " a evaluar");
    input = Number(input);
    datos.push(input);
    if (datos[i] % 2 == 0) {
        sumaPar += datos[i];
        contPar += 1;
    } else {
        sumaImpar += datos[i];
        contImpar += 1;
    };
};
console.log("La media de los numeros pares es ", sumaPar/contPar, ".");
console.log("La media de los numeros impares es ", sumaImpar/contImpar, ".");