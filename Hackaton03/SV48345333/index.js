//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

function Ejercicio1(){



const num = prompt("Ingrese un numero")

if(num>99&& num<1000){
    console.log("El numero tine tres digito");
}else{
    console.log("El numero no tiene tres digitos");
}
}
Ejercicio1();


//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function Ejercicio2(){
    // Solicitar un número al usuario
let numero = parseInt(prompt("Introduce un número entero:"));

// Verificar si el número es negativo
if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número no es negativo.");
}
}
Ejercicio2();

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function Ejercicio3(){

let numero = prompt("Introduce un número:");

if (numero.endsWith("4")) {
    console.log("El número termina en 4.");
} else {
    console.log("El número no termina en 4.");
}

}
Ejercicio3();