// 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
let num, factorial;
num = prompt("Ingrese el numero al que desea calcular el factorial");
num = Number(num);
factorial = 1;
for (let i = 1; i<=num; i++) {
    factorial *= i;
}
console.log("El factorial de ", num, " es ", factorial);