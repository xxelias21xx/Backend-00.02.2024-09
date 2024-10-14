// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
let input = prompt("Ingrese un valor para evaluar si termina en 4:")
if(input % 10 == 4) {
    console.log("El numero ",input, " termina en 4");
} else {
    console.log("El numero ", input, " no termina en 4");
}