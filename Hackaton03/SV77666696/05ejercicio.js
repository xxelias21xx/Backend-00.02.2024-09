let cantidadZapatos = parseInt(prompt("Introduce el número de zapatos que deseas comprar:"));
let precioPorZapato = 80;
let total = cantidadZapatos * precioPorZapato;
let descuento = 0;

if (cantidadZapatos > 30) {
    descuento = total * 0.40;
} else if (cantidadZapatos > 20 && cantidadZapatos <= 30) {
    descuento = total * 0.20;
} else if (cantidadZapatos > 10) {
    descuento = total * 0.10;
}

let totalConDescuento = total - descuento;

console.log("El total de la compra, aplicando el descuento, es: $" + totalConDescuento);
