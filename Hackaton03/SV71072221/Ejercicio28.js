// 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
let n = 0, suma = 0;
do {
    n += 1;
    suma += n;
} while (n < 100);
console.log("La suma de los primeros 100 numeros es ", suma, ".");