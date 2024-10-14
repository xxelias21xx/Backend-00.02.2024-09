let dividendo = parseInt(prompt("Introduce el dividendo:"));
let divisor = parseInt(prompt("Introduce el divisor:"));
let cociente = 0;
let resto = dividendo;

if (divisor === 0) {
    console.log("No se puede dividir por cero.");
} else {
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    console.log("Cociente: " + cociente);
    console.log("Resto: " + resto);
}
