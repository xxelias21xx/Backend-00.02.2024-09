// 12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso Ejercicio12
	Definir Numero1, Numero2,mayornumero Como Entero
	Escribir "Ingrese el primer numero"
	Leer Numero1
	Escribir "Ingrese el segundo numero"
	Leer Numero2
	
	Si (Numero1 > Numero2) Entonces
		mayornumero = Numero1
	SiNo
		mayornumero = Numero2
	FinSi
	Escribir "El mayor numero es ", mayornumero, "."
FinProceso
