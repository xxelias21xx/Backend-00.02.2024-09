let continuar;

do {
    let numero = parseInt(prompt("Introduce un número:"));
    console.log("El número que introdujiste es: " + numero);
    continuar = prompt("¿Deseas continuar? (sí/no)").toLowerCase();
    
} while (continuar === "sí" || continuar === "si");

console.log("Programa finalizado.");
