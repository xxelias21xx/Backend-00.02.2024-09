// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
let num1 = 0, num2 = 0;
num1 = prompt("Ingrese un numero A a calcular el MCM");
num2 = prompt("Ingrese un numero B a calcular el MCM");
while (num2 != 0) {
    ficticio = num2;
    num2 = num1 % num2;
    num1 = ficticio;
};
console.log("El minimo comun multiplo es ", num1, ".");