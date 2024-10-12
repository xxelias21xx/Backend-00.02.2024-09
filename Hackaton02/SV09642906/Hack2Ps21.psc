Proceso E21
	//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	
	    Definir numero Como Entero
		Definir factorial Como Entero
		Definir i Como Entero
		
		// Leer el número
		Escribir "Ingresa un número entero positivo:"
		Leer numero
		
		// Validar que el número sea positivo
		Si numero < 0 Entonces
			Escribir "El factorial no está definido para números negativos."
		Sino
			// Inicializar el factorial
			factorial <- 1
			
			// Calcular el factorial
			Para i <- 1 Hasta numero Hacer
				factorial <- factorial * i
			Fin Para
			
			// Mostrar el resultado
			Escribir "El factorial de ", numero, " es: ", factorial
		Fin Si
	Fin Proceso
