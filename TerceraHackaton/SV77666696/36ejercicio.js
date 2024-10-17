let numeroTerminos = parseInt(prompt("Introduce el número de términos de la serie Fibonacci:"));
let fibonacci = [0, 1];

for (let i = 2; i < numeroTerminos; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("La serie de Fibonacci es: " + fibonacci.join(", "));
