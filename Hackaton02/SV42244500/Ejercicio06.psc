//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si
//trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le
//pagarán a $25 por hora.
Proceso Ejercicio06
	
	Definir sueldoSemanal, cantidadHoras Como Entero
	
	Escribir "Escribir la cantidad de horas trabajadas: "
	Leer cantidadHoras
	
	si cantidadHoras > 0 y cantidadHoras <= 40 Entonces
		sueldoSemanal = cantidadHoras * 20
	SiNo
			si cantidadHoras > 40 Entonces
			sueldoSemanal = cantidadHoras * 25
			FinSi
	FinSi

Escribir "El sueldo semanal sera de: ", sueldoSemanal

FinProceso
