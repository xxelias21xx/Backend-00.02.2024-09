Proceso E22
	//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
		Definir n Como Entero
		Definir suma Como Entero
		Definir i Como Entero
		
		// Leer el valor de n
		Escribir "Ingresa un número entero positivo n:"
		Leer n
		
		// Validar que n sea positivo
		Si n < 1 Entonces
			Escribir "Por favor, ingresa un número entero positivo."
		Sino
			// Inicializar la suma
			suma <- 0
			
			// Calcular la suma de los primeros n números
			Para i <- 1 Hasta n Hacer
				suma <- suma + i
			Fin Para
			
			// Mostrar el resultado
			Escribir "La suma de los primeros ", n, " números es: ", suma
		Fin Si
	Fin Proceso

