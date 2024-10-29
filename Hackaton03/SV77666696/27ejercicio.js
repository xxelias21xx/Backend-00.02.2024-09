let suma = 0;
let contador = 0;
let numero;

do {
    numero = parseFloat(prompt("Introduce un número positivo (o un número negativo para finalizar):"));

    if (numero >= 0) {
        suma += numero;
        contador++;
    }

} while (numero >= 0);

if (contador > 0) {
    let media = suma / contador;
    console.log("La media de los números ingresados es: " + media.toFixed(2));
} else {
    console.log("No se ingresaron números positivos.");
}
