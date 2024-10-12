// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio21
	Definir num, contador, factorial Como Entero
	Escribir "Ingrese el numero al que desea calcular el factorial"
	Leer num
	contador = 1
	factorial = 1
	Repetir
		factorial = factorial * contador
		contador = contador + 1
	Hasta Que contador > num
	Escribir "El factorial de ", num, " es ", factorial
FinProceso
