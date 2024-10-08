// 33. Hacer un algoritmo en Pseint que permita al usuario 
// continuar con el programa.
Proceso Ejercicio33
	Definir  continuar Como Caracter
	Repetir
		Escribir "¿Desea continuar?"
		Escribir "Ingrese S <- para SI"
		Escribir "Ingrese N <- para NO"
		Leer continuar
		continuar=Minusculas(continuar)
	Hasta Que continuar='n' 
FinProceso
