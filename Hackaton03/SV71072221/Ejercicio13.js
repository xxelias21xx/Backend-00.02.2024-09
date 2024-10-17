// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
let letra;
letra = prompt("Ingrese una letra a evaluar");
letra = letra.toLowerCase();
if (letra =='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u') {
    console.log("La letra ", letra, " es una vocal");
} else {
    console.log("La letra ", letra, " no es una vocal");
}