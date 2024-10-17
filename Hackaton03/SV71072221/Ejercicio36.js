// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
let n = 0, primero = 0, segundo = 1, nuevo = 0, i = 1;
n = prompt("Ingrese el valor de n para calcular la serie de Fibonacci");
console.log(primero);
console.log(segundo);
while (i <= n-2) {
    nuevo = primero + segundo;
    console.log(nuevo);
    primero = segundo;
    segundo = nuevo;
    i += 1;
}