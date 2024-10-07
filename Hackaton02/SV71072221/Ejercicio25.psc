// 25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un n?mero.
Proceso Ejercicio25
	Definir num, contador, factorial Como Entero
	Escribir "Ingrese el numero al que desea calcular el factorial"
	Leer num
	contador = 1
	factorial = 1
	mientras contador <= num hacer
		factorial = factorial * contador
		contador = contador + 1
	FinMientras
	
	Escribir "El factorial de ", num, " es ", factorial
FinProceso
