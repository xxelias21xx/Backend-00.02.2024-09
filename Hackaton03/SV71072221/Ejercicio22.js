// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
let n, i, suma, input;
n = prompt("Ingrese la cantidad de numeros a sumar");
n = Number(n);
i = 1;
suma = 0;
while (i <= n) {
    input = prompt("Ingrese el numero N"+ i+ ":");
    input = Number(input);
    suma += input;
    i += 1;
};
console.log("La suma de los primeros ", n, " numeros es ", suma, ".");