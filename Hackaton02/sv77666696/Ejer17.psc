Algoritmo CalcularHoraSiguiente

	Definir horas, minutos, segundos Como Entero
	
	Escribir "Ingrese las horas (0-23): "
	Leer horas
	Escribir "Ingrese los minutos (0-59): "
	Leer minutos
	Escribir "Ingrese los segundos (0-59): "
	Leer segundos
	
	Si segundos < 59 Entonces
		segundos <- segundos + 1
	SiNo
		segundos <- 0
		Si minutos < 59 Entonces
			minutos <- minutos + 1
		SiNo
			minutos <- 0
			Si horas < 23 Entonces
				horas <- horas + 1
			SiNo
	
				horas <- 0
			FinSi
		FinSi
	FinSi
	
	Escribir "La hora dentro de un segundo es: ", horas, ":", minutos, ":", segundos
FinAlgoritmo
