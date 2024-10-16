// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
let i =1, sumaPar = 0;
while (i <= 1000) {
    if (i % 2 == 0) {
        sumaPar += 1;
    };
    i += 1;
}
console.log("La suma de los primeros numero pares hasta el 1000 es ", sumaPar, ".");