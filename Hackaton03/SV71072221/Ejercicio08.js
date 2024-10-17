// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
let suma, promedio, input;
suma = 0;
input = prompt("Ingrese la primera nota a evaluar");
suma = suma + Number(input);
input = prompt("Ingrese la segunda nota a evaluar");
suma = suma + Number(input);;
input = prompt("Ingrese la tercera nota a evaluar");
suma = suma + Number(input);;
promedio = suma / 3;
if (promedio >= 12.5) {
    console.log("El estudiante aprobo con una nota promedio de", promedio);
} else {
    console.log("El estudiante desaprobo con una nota promedio de", promedio);
}