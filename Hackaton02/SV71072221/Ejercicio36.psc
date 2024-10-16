// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	definir n, primero, segund, nuevo Como Entero
	Escribir "Algoritmo para calculo de serie de Fibonacci"
	Escribir "Ingrese el valor de n para el calculo"
	Leer n
	primero = 0
	segund = 1
	i = 1
	Proceso Ejercicio36
Escribir primero
	Escribir segund
	Mientras i <= n-2 Hacer
		nuevo = primero + segund
		Escribir nuevo
		primero = segund
		segund = nuevo
		i = i + 1
	FinMientras
FinProceso
