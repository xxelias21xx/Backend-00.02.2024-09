Proceso E17
	//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	

	Definir horas, minutos, segundos Como Entero
	
    // Leer la hora
    Escribir "Ingresa la hora (0-23):"
    Leer horas
    Escribir "Ingresa los minutos (0-59):"
    Leer minutos
    Escribir "Ingresa los segundos (0-59):"
    Leer segundos
	
    // Validar la entrada de la hora
    Si (horas < 0 O horas > 23) O (minutos < 0 O minutos > 59) O (segundos < 0 O segundos > 59) Entonces
        Escribir "Hora, minutos o segundos no válidos."
    Sino
        // Sumar un segundo
        segundos <- segundos + 1
		
        // Si hay un desbordamiento de segundos
        Si segundos = 60 Entonces
            minutos <- minutos + 1
            segundos <- 0
        Fin Si
		
        // Si hay un desbordamiento de minutos
        Si minutos = 60 Entonces
            horas <- horas + 1
            minutos <- 0
        Fin Si
		
        // Si hay un desbordamiento de horas
        Si horas = 24 Entonces
            horas <- 0
        Fin Si
		
        // Mostrar la nueva hora
        Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", segundos
    Fin Si
Fin Proceso

	

