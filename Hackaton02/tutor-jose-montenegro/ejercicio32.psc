//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso.


Algoritmo  ciudades
	
	
	definir nombreProvincia, ciudad, nombreCiudad, ciudadMayorPoblacion Como Caracter
	definir poblacion, mayorPoblacion Como Entero;
	Definir  i,j Como Entero
	
	mayorPoblacion=0
	para   i<-1 Hasta 3 con paso 1 Hacer
		
		
		
		
		Escribir "Ingrese el nombre de la provincia ",i,":"
		leer nombreProvincia
		Para  j<-1 hasta 11 con paso 1 Hacer
			Escribir "Ingrese el nombre de la ciudad ",j," de la provincia ",nombreProvincia 
			leer nombreCiudad
			
			Escribir "ingrese la poblacion de la ciudad ",nombreCiudad
			leer poblacion;
			
			si poblacion> mayorPoblacion Entonces
				mayorPoblacion=poblacion
				ciudadMayorPoblacion= nombreCiudad
			FinSi
		FinPara
		
	FinPara
		
	Escribir  "la ciudad con mayor poblacion es: ",ciudadMayorPoblacion," con una poblacion de ",mayorPoblacion

	
FinAlgoritmo


