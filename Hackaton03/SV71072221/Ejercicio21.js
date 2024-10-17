// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
let num, contador, factorial;
num = prompt("Ingrese el numero al que desea calcular el factorial");
num = Number(num);
contador = 1;
factorial = 1;
while (contador <= num) {
    factorial *= contador;
    contador += 1;
}
console.log("El factorial de ", num, " es ", factorial);