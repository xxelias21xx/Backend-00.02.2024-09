let numero = parseInt(prompt("Introduce un número entero del 1 al 10:"));

if (numero < 1 || numero > 10) {
    console.log("Por favor, introduce un número entre 1 y 10.");
} else {
    let esPrimo = true;

    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        console.log(numero + " es un número primo.");
    } else {
        console.log(numero + " no es un número primo.");
    }
}
