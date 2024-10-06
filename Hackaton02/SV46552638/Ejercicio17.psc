Proceso Ejercicio17
	// Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	hor=0
	min=0
	seg=0
	Repetir
		Escribir "Ingrese el nuemro de horas: (0-23)"
		Leer hor
	Hasta Que hor < 24
	
	Repetir
		Escribir "Ingrese el nuemro de horas: (0-59)"
		Leer min
	Hasta Que hor < 24
	
	Repetir
		Escribir "Ingrese el nuemro de horas: (0-59)"
		Leer seg
	Hasta Que hor < 24
	
	seg =seg +1
	Si seg ==60 Entonces
		seg =0
		min = min+1
	Fin Si
	
	Si min ==60 Entonces
		min =0
		hor = hor+1
	Fin Si
	
	Si hor ==24 Entonces
		hor =0
	Fin Si
	Escribir hor," Horas / ", min," minutos / ",seg " segundos"
FinProceso
