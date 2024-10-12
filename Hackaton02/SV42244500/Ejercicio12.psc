//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso Ejercicio12
	
	Definir primerNumero, segundoNumero, mayor Como Entero
	
	Escribir "Escriba el Primer Numero"
	Leer primerNumero
	Escribir "Escriba el Segundo Numero"
	Leer segundoNumero
	
	mayor = primerNumero
	
	si segundoNumero > mayor Entonces
		mayor = segundoNumero
	FinSi
	
	Escribir "El numero mayor es: ", mayor
	
FinProceso

