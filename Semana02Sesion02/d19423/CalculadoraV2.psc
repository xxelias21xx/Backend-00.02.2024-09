Proceso CalculadoraV2
	
	Escribir "Escriba el primer numero"
	Leer primerNumero
	Escribir "Escriba el segundo numero"
	Leer segundoNumero
	Escribir "Escriba la operacion: 1 si es suma, 2 si es resta, 3 si es multiplicacion, 4 si es division"
	Leer operacion
	
	Segun operacion Hacer
		1:
			Escribir "la respuesta es ", primerNumero + segundoNumero
		2:
			Escribir "la respuesta es ", primerNumero - segundoNumero
		3:
			Escribir "la respuesta es ", primerNumero * segundoNumero
		4:
			Escribir "la respuesta es ", primerNumero / segundoNumero
		De Otro Modo:
			Escribir "La operacion es incorrecta"
	Fin Segun
FinProceso
