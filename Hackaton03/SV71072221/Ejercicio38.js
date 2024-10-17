// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
let num = 0, sumaDivisor = 0;
num = prompt("Ingrese el numero para evaluar si es perfecto");
for (let i = 1; i < (num - 1); i++) {
    if (num % i == 0) {
        sumaDivisor += i;
    };
};
if ( sumaDivisor == num ) {
    console.log("El numero ", num, " es perfecto");
} else {
    console.log("El numero ", num, " no es perfecto");
}