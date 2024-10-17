// 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
let Numero1, Numero2, Numero3, Mayor;
Numero1 = prompt("Ingrese el primer numero");
Numero1 = Number(Numero1);
Numero2 = prompt("Ingrese el segundo numero");
Numero2 = Number(Numero2);
Numero3 = prompt("Ingrese el tercer numero");
Numero3 = Number(Numero3);
if ((Numero1 > Numero2) && (Numero1 > Numero3)) {
    Mayor = Numero1;
}
if ((Numero2 > Numero1) && (Numero2 > Numero3)) {
    Mayor = Numero2;
}
if ((Numero3 > Numero1) && (Numero3 > Numero2)) {
    Mayor = Numero3;
}
console.log("El mayor numero es ",Mayor,".");