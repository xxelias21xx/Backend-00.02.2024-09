//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
let n, i, sumaImpar;
n = prompt("Ingrese un numero a evaluar");
n = Number(n);
i = 1;
sumaImpar = 0;
while (i <= n) {
    if (i % 2 != 0) {
        sumaImpar += 1
    };
    i += 1;
};
console.log("La suma de los numeros impares menores o iguales a ", n, " es ",sumaImpar, ".");