function calcularMCD(a, b) {
    while (b !== 0) {
        let residuo = a % b;
        a = b;
        b = residuo;
    }
    return a;
}

let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));

let mcd = calcularMCD(numero1, numero2);

console.log("El M.C.D. de " + numero1 + " y " + numero2 + " es: " + mcd);
