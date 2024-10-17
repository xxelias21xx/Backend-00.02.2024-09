let iteraciones = parseInt(prompt("Introduce el número de iteraciones:"));
let pi = 3;
let signo = 1;
let divisor = 2;

for (let i = 0; i < iteraciones; i++) {
    pi += signo * (4 / (divisor * (divisor + 1) * (divisor + 2)));
    signo *= -1;
    divisor += 2;
}

console.log("La aproximación de π con " + iteraciones + " iteraciones es: " + pi);
