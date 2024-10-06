//25. Hacer un algoritmo en Pseint para calcular
//el factorial de un número de una forma distinta.
Proceso Factorial
	Definir n,factor,contador Como Entero
	
	factor=1
	contador=1
	Escribir "Ingrese un numero entero positivo para calcular factorial: "
	leer n
	Mientras contador <=n Hacer
		factor=factor*contador
		contador=contador+1
	FinMientras
	Escribir "El factorial de ",n ," es: ", factor
FinProceso
