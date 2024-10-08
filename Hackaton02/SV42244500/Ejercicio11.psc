//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	
	Definir primerNumero, segundoNumero, tercerNumero, mayor Como Entero
	
	Escribir "Escriba el Primer Numero"
	Leer primerNumero
	Escribir "Escriba el Segundo Numero"
	Leer segundoNumero
	Escribir "Escriba el Tercer Numero"
	Leer tercerNumero
	
	mayor = primerNumero
	
	si segundoNumero > mayor Entonces
		 mayor = segundoNumero
		si tercerNumero > mayor Entonces
			mayor = tercerNumero
		FinSi
	FinSi
	
	Escribir "El numero mayor es: ", mayor
	
FinProceso
