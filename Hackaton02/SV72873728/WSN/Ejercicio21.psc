
	
	Algoritmo  Ejercicio21
		definir n,factorial,contador como real;
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
