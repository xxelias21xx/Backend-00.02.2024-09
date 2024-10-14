// 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
let i = 1, suma = 0, num = 1, prom;
    while (num > 0) {
        num = prompt("Ingrese un numero positivo a evaluar");
        num = Number(num);
        suma += num;
        i += 1;
    }
    prom = (suma - num) / (i-2);
    console.log("Se ingresó un valor negativo, fin de calculo");
    console.log("Para los ", i-2, " numeros positivos ingresados, el promedio calculado es ", prom, ".");