// 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//     ¿Cuántos números son Pares?
//     ¿Cuál es el mayor de todos?
//     Si el tercero es par, calcular el cuadrado del segundo.
//     Si el primero es menor que el cuarto, calcular la media de los 4 números.
//     Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
let pares, mayorNum, nuevoMayor, sumanum, promedio, input;
datos = [];
j = 1;
sumanum = 0;
while (j <= 4) {
    input = prompt("Ingrese el "+ j+ " numero de evaluacion:");
    input = Number(input);
    sumanum += input;
    datos.push(input);
    j += 1;
};
pares = 0;
for (let i = 0; i <= 3; +1){
    // Cuales son los datos pares
    if (datos[i] % 2 == 0 && datos[i] != 0) {
        pares += 1;
    };
    // Cual es el mayor de todos
    if (i == 0) {
        mayorNum = datos[i];
    };
    if (i >= 1) {
        if ( datos[i] > mayorNum) {
            mayorNum = datos[i];
        }
    };
};
console.log("Para los datos ingresados: Se cuentan con ", pares, " numeros pares.");
console.log("El mayor numero es ", mayorNum, ".");
// Si el tercer es par, calcular el cuadrado del segundo
if (datos[2] % 2 == 0 && datos[2] != 0) {
    console.log("Como el tercer numero ", datos[2], " es par, el cuadrado del segundo numero ", datos[1], " es ", datos[1]*datos[1], ".");
};
//Si el primero es menor que el cuarto, calcular la media de los 4 números
if (datos[0] < datos[3]) {
    promedio = sumanum / 4;
    console.log("Como el primer numero ", datos[0], "es mayor al cuarto numero ", datos[3], ", la media de los 4 numeros es ", promedio);
};
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
if (datos[1] > datos[2] && datos[2] >= 50 && datos[2] <= 700) {
    console.log("Como el segundo numero ", datos[1], " es mayor al tercero ", datos[2], ", y el tercerno esta dentro delos valores de 50 y 700, la suma de los 4 numeros es ", sumanum, ".");
};