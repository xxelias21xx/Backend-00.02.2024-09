// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
let num;
num = prompt("Ingrese un numero a evaluar del 1 al 7");
num = Number(num);
switch (num) {
    case 1:
        console.log("El numero ", num, " corresponde al día domingo");
        break;
    case 2:
        console.log("El numero ", num, " corresponde al día lunes");
        break;
    case 3:
        console.log("El numero ", num, " corresponde al día martes");
        break; 
    case 4:
        console.log("El numero ", num, " corresponde al día miercoles");
        break;
    case 5:
        console.log("El numero ", num, " corresponde al día jueves");
        break;     
    case 6:
        console.log("El numero ", num, " corresponde al día viernes");
        break; 
    case 7:
        console.log("El numero ", num, " corresponde al día sabado");
        break;    
    default:
        console.log("Ingrese un valor en el rango de 1-7");
        break;
}