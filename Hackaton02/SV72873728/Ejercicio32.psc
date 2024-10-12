Proceso Ejercicio32
	
	Definir Ciudad como texto
	Definir poblacion como entero
	definir maxpoblacion Como Entero
	definir maxciudad como texto
	
	
	maxpoblacion = 0
	
	Para i<-1 Hasta 14 Con Paso 1 Hacer
		Escribir "Ingrese el nombre de la ciudad/provincia ", i,":"
		Leer Ciudad
		Escribir "Ingrese Población de la ciudad/provincia ",i, ":"
		Leer poblacion
		
		Si poblacion > maxpoblacion Entonces
			maxpoblacion = poblacion
			maxciudad = ciudad
		FinSi
		
	Fin Para
	
	Escribir "La ciudad/Provincia con mayor población es: ", maxciudad
	
FinProceso
