// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.
let num, i, contador;
num = prompt("Ingrese un numero del 1 al 10 para evaluar si es primo o no");
i = 1;
contador = 0;
while (i <= num) {
    if(num % i == 0) {
        contador += 1;
    }
    i += 1;
}
if (contador == 2) {
    console.log("El numero ", num, " es primo");
} else {
    console.log("El numero ", num, " no es primo");
}