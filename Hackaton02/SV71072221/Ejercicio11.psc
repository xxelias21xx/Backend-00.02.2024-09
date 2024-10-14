// 11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	Definir Numero1, Numero2, Numero3,mayornumero Como Entero
	Escribir "Ingrese el primer numero"
	Leer Numero1
	Escribir "Ingrese el segundo numero"
	Leer Numero2
	Escribir "Ingrese el tercer numero"
	Leer Numero3
	
	Si (Numero1 > Numero2) y (Numero1 > Numero3) Entonces
		mayornumero = Numero1
	FinSi
	Si (Numero2 > Numero1) y (Numero2 > Numero3) Entonces
		mayornumero = Numero2
	FinSi
	Si (Numero3 > Numero1) y (Numero3 > Numero2) Entonces
		mayornumero = Numero3
	FinSi
	Escribir "El mayor numero es ", mayornumero, "."
FinProceso