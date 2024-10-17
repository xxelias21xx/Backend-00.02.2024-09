let numero = prompt("Introduce un número:");
numero = parseInt(numero);

if (numero % 10 === 4 || numero % 10 === -4) {
    console.log("El número termina en 4.");
} else {
    console.log("El número no termina en 4.");
}
