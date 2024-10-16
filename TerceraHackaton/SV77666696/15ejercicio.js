let centimetros = parseFloat(prompt("Introduce la cantidad en centímetros:"));
let libras = parseFloat(prompt("Introduce la cantidad en libras:"));

let pulgadas = centimetros / 2.54;
let kilogramos = libras * 0.453592;

console.log(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas.");
console.log(libras + " libras son " + kilogramos.toFixed(2) + " kilogramos.");
