
Proceso E25
	//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
		Definir numero, factorial Como Entero
		
		Escribir "Ingrese un número entero no negativo:"
		Leer numero
		
		Si numero < 0 Entonces
			Escribir "El factorial no está definido para números negativos."
		Sino
			factorial <- 1
			Para i Desde 1 Hasta numero Hacer
				factorial <- factorial * i
			Fin Para
			
			Escribir "El factorial de ", numero, " es: ", factorial
		Fin Si
	Fin Proceso