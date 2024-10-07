Proceso Ejercicio36
	
	Escribir "Ingrese cantidad de números de la serie"
	Leer cantidad
	
	primero = 0
	segundo = 1
	

	Para i<-1 Hasta cantidad Con Paso 1 Hacer
		
		Si i = 1 Entonces
			escribir primero
		FinSi
		
		Si i = 2 Entonces
			escribir segundo
		FinSi
		
		si i > 2 Entonces
			numero = segundo + primero
			Escribir numero
			primero = segundo
			segundo = numero
		FinSi

	Fin Para
	
FinProceso
