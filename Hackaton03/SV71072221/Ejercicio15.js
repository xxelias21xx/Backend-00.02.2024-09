// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
let operacion, input;
operacion = prompt("¿Que unidad desea convertir?, \n Inserte C si desea convertir centimetros a pulgadas \n Inserte L si desea convertir libras a kilogramos");
operacion = operacion.toLowerCase();
switch (operacion) {
    case 'c':
        input = prompt("Ingrese la cantidad de centimetros a convertir a pulgadas");
        console.log(input, " centimetros equivalen a ", input*0.393701, " pulgadas.");
        break;
    case 'l':
        input = prompt("Ingrese la cantidad de libras a convertir a kilogramos");
        console.log(input, " libras equivalen a ", input*0.453592, " kilogramos.");
        break;
    default :
        console.log("Ingrese un valor valido");
        break;
}