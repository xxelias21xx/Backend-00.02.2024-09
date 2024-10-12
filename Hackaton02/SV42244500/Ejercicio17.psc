//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	
	Definir horas, minutos, segundos Como Entero
	
	Escribir "Ingrese las horas (0-23)"
	Leer horas
	Escribir "Ingrese las minutos (0-59)"
	Leer minutos
	Escribir "Ingrese las segundos(0-59)"
	Leer segundos
	
	segundos = segundos +1
	
	si segundos = 60 Entonces
		segundos = 0
		minutos = minutos + 1
	FinSi
	
	si minutos = 60 Entonces
		minutos = 0
		horas = horas + 1
	FinSi
	
	si horas = 24 Entonces
		horas = 0
	FinSi
	
	Escribir  "La hora dentro de un segundo será: ",horas," horas " ,minutos," minutos y " ,segundos " segundos "
	
FinProceso
