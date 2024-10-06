//34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar 
//de los números del uno al nueve.
Proceso Tabla_Del1al9
	Escribir "Tabla de multiplicar del 1 al 9"
	
	Para num <- 1 Hasta 9 Con Paso 1 Hacer
		Escribir "Tabla de multiplicar del", num
		Para mult <- 1 Hasta 12 Con Paso 1 Hacer
			Escribir num, "x", mult, "=", num * mult
		FinPara
		Escribir ""
	FinPara
	
FinProceso

