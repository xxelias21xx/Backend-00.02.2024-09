Algoritmo Ejercicio06
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
	//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas
    //entonces las horas extras se le pagarán a $25 por hora.
	Definir horasTrabajadas, pagoSemanal, cantExtras como entero
	horaNormal = 20
	horaExtra = 25
	horSemanal = 40 
	Escribir "Estimado, ingrese cuantas horas ha trabajado para calcular su pago"
	Leer horTrabajadas
	
	//Calcular horas Extras
	cantExtras = horTrabajadas-horSemanal
	
	// Si trabajó 40 horas o menos, se le paga normalmente
	si horTrabajadas <= 40 
		pagoSemanal = horTrabajadas*horaNormal
		
	SiNo
		// Si trabajó más de 40 horas, se calculan horas normales y horas extra
		si horTrabajadas > 40 
			pagoSemanal = (horSemanal*horaNormal)+(cantExtras*horaExtra)
		FinSi
		
	FinSi
	
	// Mostrar el resultado
    Escribir "Estimado, su pago total es: S/", pagoSemanal, ". Gracias por su esfuerzo."

FinAlgoritmo
