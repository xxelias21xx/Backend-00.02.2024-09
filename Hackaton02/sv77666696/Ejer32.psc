Algoritmo CiudadConMasPoblacion
	Definir i Como Entero
	Definir ciudad, ciudad_mayor Como Cadena
	Definir poblacion, mayor_poblacion Como Real
	
	mayor_poblacion <- 0
	ciudad_mayor <- ""
	
	Para i <- 1 Hasta 11 Con Paso 1 Hacer
		Escribir "Ingrese el nombre de la ciudad ", i, ": "
		Leer ciudad
		
		Escribir "Ingrese la población de la ciudad ", ciudad, ": "
		Leer poblacion
		
		Si poblacion > mayor_poblacion Entonces
			mayor_poblacion <- poblacion
			ciudad_mayor <- ciudad
		FinSi
	FinPara
	
	Escribir "La ciudad con mayor población es: ", ciudad_mayor, " con ", mayor_poblacion, " habitantes."
FinAlgoritmo
