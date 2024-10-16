// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
let input1 = prompt("Ingrese el primer valor a evaluar");
let input2 = prompt("Ingrese el segundo valor a evaluar");
let input3 = prompt("Ingrese el tercero valor a evaluar");

let mayor;
let medio;
let menor;

if ((input1 > input2) && (input1 > input3)) {
    mayor = input1;
    if(input2 > input3) {
        medio = input2;
        menor = input3;
    }
}
if ((input2 > input1) && (input2 > input3)) {
    mayor = input2;
    if(input1 > input3) {
        medio = input1;
        menor = input3;
    }
}
if ((input3 > input1) && (input3 > input2)) {
    mayor = input3;
    if(input1 > input2) {
        medio = input1;
        menor = input2;
    }
}
console.log("El mayor numero es ",mayor, " .");
console.log("El numero medio es ",medio, " .");
console.log("El menor numero es ",menor, " .");