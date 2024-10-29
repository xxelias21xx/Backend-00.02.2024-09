let salarioActual = parseFloat(prompt("Introduce el salario actual del trabajador:"));
let aumento = 0;

if (salarioActual > 2000) {
    aumento = salarioActual * 0.05;
} else {
    aumento = salarioActual * 0.10;
}

let salarioConAumento = salarioActual + aumento;

console.log("El nuevo salario con el aumento es: $" + salarioConAumento.toFixed(2));
