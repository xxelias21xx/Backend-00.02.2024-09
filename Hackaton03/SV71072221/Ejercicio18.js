// 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
let cantCD, precio, ingreso, utilidad;
cantCD = prompt("Ingrese la cantidad de CDS a comprar");
cantCD = Number(cantCD);
if (cantCD <= 9) {
    precio = 10;
} else {
    if (cantCD <= 99) {
        precio = 8;
    } else {
        if (cantCD <= 499) {
            precio = 7;
        } else {
            precio = 6;
        }
    }
}
ingreso = precio * cantCD;
utilidad = ingreso * 0.0825;
console.log("Para una cantidad de venta de ", cantCD, " CDs, el precio de venta es de $", precio, ", y la ganancia del vendedor es de $", utilidad, ".");