// 14. Hacer un algoritmo en Pseint que lea un entero
// positivo del 1 al diez y determine si es un número primo.
Proceso Ejercicio14
	Definir num, i, contador Como Entero
	Escribir "Ingrese el numero a evaluar si es entero o no:"
	Leer num
	
	i = 1
	contador = 0
	Mientras i <= num Hacer
		Si num % i ==0 Entonces
			contador = contador + 1
		FinSi
		i = i + 1
	FinMientras
	
	si contador == 2 Entonces
		Escribir "El numero ", num, " es primo"
	SiNo
		Escribir "El numero ", num, " no es primo"
	FinSi
FinProceso
