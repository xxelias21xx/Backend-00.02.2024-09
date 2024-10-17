let precioCompra = parseFloat(prompt("Introduce el precio total de la compra:"));
let tipoMembresia = prompt("Introduce el tipo de membresía (A, B o C):").toUpperCase();
let descuento = 0;

if (tipoMembresia === "A") {
    descuento = precioCompra * 0.10;
} else if (tipoMembresia === "B") {
    descuento = precioCompra * 0.15;
} else if (tipoMembresia === "C") {
    descuento = precioCompra * 0.20;
} else {
    console.log("Tipo de membresía no válido.");
}

let totalConDescuento = precioCompra - descuento;

console.log("El total de la compra con descuento es: $" + totalConDescuento);
