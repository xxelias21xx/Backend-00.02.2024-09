//33. Hacer un algoritmo en Pseint que 
//permita al usuario continuar con el programa.
Proceso Continuar_Programa
	Definir respuesta Como Caracter
	respuesta <- "s"
	Mientras respuesta == "s" o respuesta=="S" Hacer
		Escribir "Bienvenido al programa"
		Escribir "Desea continuar en el programa? (S/N)"
		leer respuesta
	FinMientras
	
FinProceso
