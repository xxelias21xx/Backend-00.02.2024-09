Proceso Ejercicio17
	
	Escribir "Ingrese Horas (0 - 24)"
	Leer Hora
	Escribir "Ingrese minutos (0 - 60)"
	Leer minuto
	Escribir "Ingrese segundos (0 - 60)"
	Leer segundo
	
	segundo = segundo + 1
	
	si segundo = 60 Entonces
		segundo = 0
		minuto = minuto + 1
	FinSi
	
	Si minuto = 60 Entonces
		minuto = 0
		hora = hora + 1
	FinSi
	
	Si hora = 24 Entonces
		hora = 0
	FinSi
	
	Escribir "La hora en un segundo será: ", hora, ":", minuto, ":", segundo
	
FinProceso
