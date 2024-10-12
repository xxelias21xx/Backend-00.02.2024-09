Proceso EJERCICIO06
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
	//se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	
	DEFINIR horasTrabajadas,sueldoBase, horasExtras, sueldoExtras, sueldoTotal Como Real 
	
    // Solicitar al usuario el número de horas trabajadas
    Escribir "Ingrese el número de horas trabajadas esta semana: "
    Leer horasTrabajadas
	
    // Calcular el sueldo base (hasta 40 horas)
    si horasTrabajadas <= 40 Entonces
        sueldoBase <- horasTrabajadas * 20
        horasExtras <- 0
    SiNo
        sueldoBase <- 40 * 20
        horasExtras <- horasTrabajadas - 40
    FinSi
	
    // Calcular el sueldo por horas extras
    sueldoExtras <- horasExtras * 25
	
    // Calcular el sueldo total
    sueldoTotal <- sueldoBase + sueldoExtras
	
    // Mostrar el resultado
    Escribir "Sueldo total: $", sueldoTotal
	
FinProceso
