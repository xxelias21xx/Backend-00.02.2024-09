let mayor = -Infinity;
let menor = Infinity;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("Introduce el número " + i + ":"));

    if (numero > mayor) {
        mayor = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}

console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);
