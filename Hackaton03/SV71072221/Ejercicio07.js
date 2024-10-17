// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento
let membresia;
membresia = prompt("Ingrese el tipo de membresia que tiene el cliente");
membresia = membresia.toLocaleLowerCase();
switch (membresia) {
    case 'a':
        console.log("La membresia A corresponde a un 10% de descuento en compras");
        break;
    case 'b':
        console.log("La membresia B corresponde a un 15% de descuento en compras");
        break;
    case 'c':
        console.log("La membresia C corresponde a un 20% de descuento en compras");
        break;
}