//10. Hacer un algoritmo en Pseint que diga si un número es par o impar.
Proceso NumerParImpar
	
	Escribir "Ingrese número a determinar: "
	Leer Numer
	
	Definir  Dif Como Entero
	Dif=Numer %2
	
	Si Dif<>0 Entonces
		Escribir "El número es impar"
	SiNo
		Escribir "El número es par"
	Fin Si
FinProceso
