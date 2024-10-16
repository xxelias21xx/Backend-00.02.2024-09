// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
let input = prompt("Inserte un numero");
if (input > 99 && input <1000) {
    console.log("El numero ", input, " tiene tres digitos");
} else{
    console.log("El numero ",input, " no tiene tres digitos")
}