let numero = parseInt(prompt("Introduce un número entero positivo:"));
let factorial = 1;

if (numero < 0) {
    console.log("No se puede calcular el factorial de un número negativo.");
} else {
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log("El factorial de " + numero + " es: " + factorial);
}
