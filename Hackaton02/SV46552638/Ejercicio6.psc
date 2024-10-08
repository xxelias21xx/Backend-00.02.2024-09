Proceso Ejercicio6
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
	//se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	sueldo = 0.0
	costoHora = 20
	horaExtra = 25
	Escribir "Ingrese cantidad de horas trabajadas: "
	Leer horas

	Si horas <= 40 Entonces
		sueldo = horas * costoHora
	SiNo
		sueldo = 800 + ((horas - 40)*horaExtra)
	Fin Si
	Escribir "Su sueldo es: ", sueldo
FinProceso
