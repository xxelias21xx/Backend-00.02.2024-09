let nota1 = parseFloat(prompt("Introduce la primera nota:"));
let nota2 = parseFloat(prompt("Introduce la segunda nota:"));
let nota3 = parseFloat(prompt("Introduce la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 11) {
    console.log("El estudiante aprobó con un promedio de: " + promedio.toFixed(2));
} else {
    console.log("El estudiante no aprobó. Su promedio es: " + promedio.toFixed(2));
}
