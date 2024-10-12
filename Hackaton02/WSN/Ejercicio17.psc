Algoritmo Ejercicio17
	
	//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule 
	//la hora dentro de un segundo.
    Definir horas, minutos, segundos Como Entero
  
    // Leer la hora en formato de 24 horas
    Escribir "Ingrese la hora"
    Leer horas
	Escribir "Ingrese los minutos"
	Leer minutos 
	Escribir "Ingrese los segundos"
	Leer segundos
	

	
		
		// Sumar un segundo
		segundos = segundos + 1
		
		// Verificar si los segundos superan 59
		Si segundos > 59 Entonces
			segundos = 0
			minutos = minutos + 1
			
			// Verificar si los minutos superan 59
			Si minutos > 59 Entonces
				minutos = 0
				horas = horas + 1
				
				// Verificar si las horas superan 23
				Si horas > 23 Entonces
					horas = 0
				FinSi
			FinSi
		FinSi
		
		// Mostrar la nueva hora
		Escribir "La nueva hora es: ", horas, ":", minutos, ":", segundos
FinAlgoritmo

