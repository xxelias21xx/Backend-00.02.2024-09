let sumaPares = 0;
let sumaImpares = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Introduce el número " + i + ":"));

    if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
    } else {
        sumaImpares += numero;
        contadorImpares++;
    }
}

let mediaPares = contadorPares > 0 ? sumaPares / contadorPares : 0;
let mediaImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;

console.log("La media de los números pares es: " + mediaPares.toFixed(2));
console.log("La media de los números impares es: " + mediaImpares.toFixed(2));
