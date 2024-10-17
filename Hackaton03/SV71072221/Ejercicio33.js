// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
let continuar;
do {
    continuar = prompt("¿Desea continuar?\nIngrese S <- para SI\nEscribir N <- para NO");
    continuar = continuar.toString();
    continuar = continuar.toLowerCase();
} while (continuar != "n");