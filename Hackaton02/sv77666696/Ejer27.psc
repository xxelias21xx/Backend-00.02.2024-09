Algoritmo MediaNumerosPositivos
	Definir num, suma, contador Como Real
	Definir media Como Real
	
	suma <- 0
	contador <- 0

	Repetir
		Escribir "Ingrese un número positivo (o un número negativo para terminar):"
		Leer num
		
		Si num >= 0 Entonces
			suma <- suma + num
			contador <- contador + 1
		FinSi
	Hasta Que num < 0
	
	Si contador > 0 Entonces
		media <- suma / contador
		Escribir "La media de los números positivos es: ", media
	SiNo
		Escribir "No se ingresaron números positivos."
	FinSi
FinAlgoritmo
