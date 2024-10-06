//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Algoritmo  determinar_factorial
	
	definir n,factorial,contador como entero;
	
	factorial =1
	contador=1
	
	Escribir  "Ingrese un numero entero positivo para calcular factorial";
	leer n
	Mientras  contador<=n Hacer
		
		factorial = factorial* contador
		contador= contador +1
	FinMientras
	
	
	Escribir  "El fatorial del numero: ",n," es: ",factorial
FinAlgoritmo
