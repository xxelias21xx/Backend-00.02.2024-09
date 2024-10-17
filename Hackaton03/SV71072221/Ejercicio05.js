// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
let numZapatos, precioZapato, descuento, total;
precioZapato = 80;
numZapatos = prompt("Ingrese el numero de zapatos a comprar")
if (numZapatos > 10) {
    descuento = precioZapato *0.1 * numZapatos;
    if (numZapatos > 20 && numZapatos <= 23) {
        descuento = precioZapato * 0.2 * numZapatos;
    } 
}
total = (precioZapato * numZapatos) - descuento;
console.log("Si se compran", numZapatos, " zapatos, el descuento por zapato sera de $", descuento, ". Por lo tanto, el precio total sera de $",total, ".");