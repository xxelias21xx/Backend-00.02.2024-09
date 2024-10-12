Algoritmo Ejercicio25
	//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Definir num Como Entero
	factorial = 1
	Escribir  "Ingres un número para calcular su factorial:"
	leer num
	
	Mientras num > 1 Hacer
		factorial = factorial * num
		num = num - 1
	FinMientras
	
	Escribir "El factorial es: ", factorial
FinAlgoritmo
