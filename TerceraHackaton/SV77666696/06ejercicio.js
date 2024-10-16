let horasTrabajadas = parseInt(prompt("Introduce el número de horas trabajadas en la semana:"));
let pagoPorHora = 20;
let pagoPorHoraExtra = 25;
let sueldo;

if (horasTrabajadas <= 40) {
    sueldo = horasTrabajadas * pagoPorHora;
} else {
    let horasExtras = horasTrabajadas - 40;
    sueldo = (40 * pagoPorHora) + (horasExtras * pagoPorHoraExtra);
}

console.log("El sueldo semanal es: $" + sueldo);
