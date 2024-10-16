let idEmpleado = parseInt(prompt("Introduce el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
let diasTrabajados = parseInt(prompt("Introduce la cantidad de días trabajados (máximo 6 días):"));

if (diasTrabajados < 0 || diasTrabajados > 6) {
    console.log("La cantidad de días trabajados debe estar entre 0 y 6.");
} else {
    let salarioDiario;

    switch (idEmpleado) {
        case 1:
            salarioDiario = 56;
            break;
        case 2:
            salarioDiario = 64;
            break;
        case 3:
            salarioDiario = 80;
            break;
        case 4:
            salarioDiario = 48;
            break;
        default:
            console.log("Identificador de empleado no válido.");
            salarioDiario = 0;
    }

    let pagoTotal = salarioDiario * diasTrabajados;

    if (salarioDiario > 0) {
        console.log("El pago total al empleado es: $" + pagoTotal.toFixed(2));
    }
}
