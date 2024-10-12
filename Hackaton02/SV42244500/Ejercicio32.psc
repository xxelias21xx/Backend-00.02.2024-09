//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades,
//hacer un algoritmo en Pseint que nos permita saber eso.
Proceso Ejercicio32
	
	Definir nombreProvincia, ciudad, nombreCiudad, ciudadMayorPoblacion Como Caracter
	Definir poblacion, mayorPoblacion Como Entero
	Definir i, j Como Entero
	
	mayorPoblacion = 0
	
	Para i<-1 Hasta 3 con paso 1 hacer
	
		Escribir "Ingrese el nombre de la provincia ", i, ":"
		Leer nombreProvincia
		para j<-1 Hasta 11 Con Paso 1 Hacer
			Escribir "Ingrese el nombre de la ciudad ", j, "de la provincia " , nombreProvincia
			Leer nombreCiudad
			
			Escribir "Ingrese la poblacion de la ciudad", nombreCiudad
			Leer poblacion
			
			si poblacion > mayorPoblacion Entonces
				mayorPoblacion = poblacion
				ciudadMayorPoblacion = nombreCiudad
			FinSi
		FinPara
	FinPara
	
	Escribir "La ciudad con mayor poblacion es: " ciudadMayorPoblacion, " con una poblacion de ", mayorPoblacion
	
FinProceso
