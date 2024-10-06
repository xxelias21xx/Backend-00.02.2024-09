//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
//entonces las horas extras se le pagarán a $25 por hora.

Algoritmo SueldoTrabajador
	
    Definir horas_trabajadas, sueldo Como Real
	
    Escribir "Ingrese el número de horas trabajadas en la semana:"
    Leer horas_trabajadas
	
    Si horas_trabajadas <= 40 Entonces
        sueldo <- horas_trabajadas * 20
    Sino
        sueldo <- (40 * 20) + ((horas_trabajadas - 40) * 25)
    FinSi
	
    Escribir "El sueldo semanal es: $", sueldo
FinAlgoritmo

