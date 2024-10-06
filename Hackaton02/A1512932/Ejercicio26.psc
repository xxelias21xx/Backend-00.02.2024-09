Algoritmo Ejercicio26
	//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Definir div, divisor, cociente, resto Como Entero
	cociente = 0
	
	Escribir "Ingrese el diividendo:"
	Leer div
	Escribir "Ingrese el divisor:"
	Leer divisor
	
	Mientras div >= divisor Hacer
		div = div - divisor
		cociente = cociente + 1 
	FinMientras
	
	resto = div
	Escribir "Cociente:", cociente
	Escribir "Resto:", resto
FinAlgoritmo
