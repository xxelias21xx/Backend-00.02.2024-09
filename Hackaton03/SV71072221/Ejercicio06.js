// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
let salarioHora, horas;
horas = prompt("Ingrese la cantidad de horas a laborar en la semana");
if (horas <= 40) {
    salarioHora = 20;
} else {
    salarioHora = 25 * horas;
}
console.log("El salario por hora sera de $", salarioHora, " Por lo tanto, el sueldo semanal del trabajador sera de $", salarioHora*horas);