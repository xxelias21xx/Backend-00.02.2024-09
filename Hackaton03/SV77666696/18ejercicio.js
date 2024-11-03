let cantidadCDs = parseInt(prompt("Introduce la cantidad de CDs a comprar:"));
let precioPorCD;
let totalVenta;
let ganancia;

if (cantidadCDs <= 9) {
    precioPorCD = 10;
} else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
    precioPorCD = 8;
} else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
    precioPorCD = 7;
} else {
    precioPorCD = 6;
}

totalVenta = cantidadCDs * precioPorCD;
ganancia = totalVenta * 0.0825;

console.log("El precio total para el cliente es: $" + totalVenta.toFixed(2));
console.log("La ganancia para el vendedor es: $" + ganancia.toFixed(2));
