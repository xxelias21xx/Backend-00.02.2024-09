Proceso Ejercicio13
	//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	Definir char Como Caracter
	Escribir "Ingrese una letra"
	Leer char
	char = Minusculas(char)
	
	Si char == "a" o char == "e" o char == "i" o char == "o" o char == "u" Entonces
		Escribir char," Es una vocal"
	SiNo
		Escribir char," No es una vocal"
	Fin Si
	
FinProceso
