let iteraciones = parseInt(prompt("Introduce el número de iteraciones:"));
let pi = 0;
let signo = 1;

for (let i = 0; i < iteraciones; i++) {
    pi += signo * (4 / (2 * i + 1));
    signo *= -1;
}

console.log("La aproximación de π con " + iteraciones + " iteraciones es: " + pi);
