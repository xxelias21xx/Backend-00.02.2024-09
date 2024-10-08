Proceso Ejercicio39
	
	Escribir "Ingrese la cantidad de numeros de la serie"
	Leer serie
	
	phi = 0
	
	Para j<-0 Hasta serie - 1 Con Paso 1 Hacer
		factor = (4 / (2 * j +1)) * ((-1)^j)
		phi = phi + factor 
	Fin Para 
	
	Escribir "El valor de pi es: ", phi
	
FinProceso
