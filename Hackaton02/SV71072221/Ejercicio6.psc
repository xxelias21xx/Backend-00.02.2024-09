// 6. Hacer un algoritmo en Pseint para ayudar a un trabajador a 
// saber cuál será su sueldo semanal, se sabe que si trabaja 40 
// horas o menos, se le pagará $20 por hora, pero si trabaja más 
// de 40 horas entonces las horas extras se le pagarán a $25 por hora.
Proceso Ejercicio6
	Definir salarioHora, horas Como Entero
	Escribir  "Ingrese la cantidad de horas a laborar en la semana:"
	Leer horas
	
	Si salario <= 40 Entonces
		salarioHora = 20
	SiNo
		salarioHora = 25 * horas
	FinSi
	Escribir "El salario por hora será de $", salarioHora, "."
	Escribir "El sueldo semanal del trabajador sera de $", salarioHora*horas, "."
	
FinProceso
