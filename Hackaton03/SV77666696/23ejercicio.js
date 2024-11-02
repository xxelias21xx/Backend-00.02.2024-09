let n = parseInt(prompt("Introduce un número entero positivo:"));
let suma = 0;

if (n < 0) {
    console.log("Por favor, introduce un número positivo.");
} else {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }
    console.log("La suma de los números impares menores o iguales a " + n + " es: " + suma);
}
