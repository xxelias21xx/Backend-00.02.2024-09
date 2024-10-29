let numero = parseInt(prompt("Introduce un número del 1 al 7:"));

switch (numero) {
    case 1:
        console.log("El día correspondiente es Lunes.");
        break;
    case 2:
        console.log("El día correspondiente es Martes.");
        break;
    case 3:
        console.log("El día correspondiente es Miércoles.");
        break;
    case 4:
        console.log("El día correspondiente es Jueves.");
        break;
    case 5:
        console.log("El día correspondiente es Viernes.");
        break;
    case 6:
        console.log("El día correspondiente es Sábado.");
        break;
    case 7:
        console.log("El día correspondiente es Domingo.");
        break;
    default:
        console.log("Por favor, introduce un número válido entre 1 y 7.");
}
