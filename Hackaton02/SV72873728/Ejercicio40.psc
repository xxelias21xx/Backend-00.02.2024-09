Proceso Ejercicio40
	
	Escribir "Ingrese la cantidad de numeros de la serie"
	Leer serie
	
	phi = 0
	
	Para j<-1 Hasta serie Con Paso 1 Hacer
		factor = (4 /( (2 * j) * (2 * j + 1) * (2 * j + 2)) )* ((-1)^(j-1))
		phi = phi + factor 
	Fin Para 
	
	phi = phi + 3
	
	Escribir "El valor de pi es: ", phi
	
FinProceso
