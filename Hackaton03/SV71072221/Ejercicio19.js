// 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//     Cajero (56$/día).
//     Servidor (64$/día).
//     Preparador de mezclas (80$/día).
//     Mantenimiento (48$/día).
//     El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
let id, empleado, salario, cantDias;
id = prompt("** Identificadores de tipo de Empleado **\n  51 para CAJEROS\n  52 para SERVIDOR\n  53 para PREPARADOR DE MEZCLAS\n  54 para MANTENIMIENTO\nIngrese un identificador a empleado a evaluar:");
id = Number(id);
switch (id) {
    case 51:
        empleado = "cajero";
        salario = 56;
        break;
    case 52:
        empleado = "servidor";
        salario = 64;
        break;
    case 53:
        empleado = "preparador de mezclas";
        salario = 80;
        break;  
    case 54:
        empleado = "de mantenimiento";
        salario = 48;
        break;      
    default:
        console.log("Ingrese un identificador valido");
        break;
};
cantDias = prompt("Ingrese la cantidad de horas trabajadas por el empleado "+empleado+":");
cantDias = Number(cantDias);
console.log("Para una cantidad trabajada de ", cantDias, " dias, el empleado ", empleado, " debe recibir $", cantDias*salario, " en total.");