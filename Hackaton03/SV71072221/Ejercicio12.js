// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
let Numero1, Numero2, Mayor;
Numero1 = prompt("Ingrese el primer numero");
Numero1 = Number(Numero1);
Numero2 = prompt("Ingrese el segundo numero");
Numero2 = Number(Numero2);
if ((Numero1 > Numero2) && (Numero1 > Numero3)) {
    Mayor = Numero1;
} else{
    Mayor = Numero2;
}
console.log("El mayor numero es ",Mayor,".");
