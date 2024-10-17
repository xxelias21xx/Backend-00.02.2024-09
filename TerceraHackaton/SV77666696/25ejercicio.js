function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let numero = parseInt(prompt("Introduce un número entero positivo:"));

if (numero < 0) {
    console.log("No se puede calcular el factorial de un número negativo.");
} else {
    let resultado = factorial(numero);
    console.log("El factorial de " + numero + " es: " + resultado);
}
