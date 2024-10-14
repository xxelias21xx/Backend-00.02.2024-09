Proceso Ejercicio19
	
	Escribir "Ingrese código de trabajador"
	Leer codigo
	Escribir "Ingrese dias trabajados"
	Leer dias
	
	Mientras  dias > 6 o dias < 0 Hacer
		Escribir "numero de dias no válidos"
		Escribir "Ingrese dias trabajados"
		Leer dias
	Fin Mientras
	
	
	Segun codigo Hacer
		1:
			sueldo = 56 * dias
		2:
			sueldo = 64 * dias
		3:
			sueldo = 80 * dias
		4:
			sueldo = 48 * dias
		De Otro Modo:
			Escribir "No es un código válido"
	Fin Segun
	
	Escribir "El monto a pagar es de: ", sueldo
	
FinProceso
