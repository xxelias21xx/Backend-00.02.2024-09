Proceso Ejercicio33
	
	bandera = 1
	
	Repetir
		Escribir "¿Desea continuar con el programa? Si: S, No: N"
		Leer respuesta
		
		Segun respuesta Hacer
			"s" o "S":
				bandera = 1
			"n" o "N":
				bandera = 0
			De Otro Modo:
				Escribir "No es una opcion válida"
		Fin Segun
		
		
	Hasta Que bandera = 0
	
FinProceso
