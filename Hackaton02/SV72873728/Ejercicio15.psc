Proceso Ejercicio15
	
	Escribir "Ingrese operación que quiere realizar"
	Escribir "1: Centímetros a pulgadas"
	Escribir "2: Libras a kilogramos"
	Leer operacion
	
		Segun operacion Hacer
		1:
			Escribir "Ingrese centimetros"
			Leer centimetros
			pulgadas = centimetros / 2.54
			Escribir centimetros, " centimetros son: ", pulgadas, " pulgadas"
		2:
			Escribir "Ingrese libras"
			Leer libras
			kilogramos = libras / 2.20462
			Escribir libras " libras son: ", kilogramos, " kilogramos"
		De Otro Modo:
			Escribir "No es operación válida"
	Fin Segun
	
FinProceso
