let numero = prompt("Introduce un número:");
numero = parseInt(numero);

if (numero >= 100 && numero <= 999 || numero <= -100 && numero >= -999) {
    console.log("El número tiene tres dígitos.");
} else {
    console.log("El número no tiene tres dígitos.");
}
