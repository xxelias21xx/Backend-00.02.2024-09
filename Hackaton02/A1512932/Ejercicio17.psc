	Algoritmo Ejercicio17
		// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
		
		Definir hora, minutos, segund Como Entero
		
		// Solicitar la hora, minutos y segund al usuario
		Escribir "Por favor, ingrese la hora (0-23): "
		Leer hora
		Escribir "Por favor, ingrese los minutos (0-59): "
		Leer minutos
		Escribir "Por favor, ingrese los segund (0-59): "
		Leer segund
		
		// Validar la hora, minutos y segund
		Si (hora < 0 o hora > 23) o (minutos < 0 o minutos > 59) o (segund < 0 o segund > 59) Entonces
			Escribir "Hora, minutos o segund ingresados son inv?lidos."
		FinSi
		
		// Incrementar los segund
		segundo <- segund + 1
		
		// Verificar si los segund alcanzan 60
		Si segund = 60 Entonces
			segund = 0
			minutos = minutos + 1
		FinSi
		
		// Verificar si los minutos alcanzan 60
		Si minutos = 60 Entonces
			minutos = 0
			hora = hora + 1
		FinSi
		
		// Verificar si la hora alcanza 24
		Si hora = 24 Entonces
			hora = 0
		FinSi
		
		// Mostrar la nueva hora
		Escribir "La hora dentro de un segundo es: ", hora, ":", minutos, ":", segund
		

FinAlgoritmo
