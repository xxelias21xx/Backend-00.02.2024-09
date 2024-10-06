Algoritmo PoblacionCiudadyProvincia
	Definir provincia, ciudad, nombreCiudad, ciudadMayorpoblacion Como Caracter
	Definir poblacion, mayorPoblacion Como Entero
	Definir i, j Como Entero
	mayorPoblacion<-0
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir "Ingrese el número de la provincia" , i ,":"
		leer provincia
		Para j<-1 Hasta 11 Con Paso 1 Hacer
			Escribir "Ingrese el nombre de la ciudad ", j , " de la provincia", provincia
			leer nombreCiudad
			Escribir "Ingrese la poblacion de la ciudad ", nombreCiudad
			leer nombreCiudad
			si poblacion>mayorPoblacion Entonces
				mayorPoblacion<-poblacion
				ciudadMayorpoblacion<-nombreCiudad
			FinSi
		FinPara
	FinPara
	Escribir "La ciudad con mayor población es: ", ciudadMayorpoblacion, " con una población de ", mayorPoblacion
FinAlgoritmo
