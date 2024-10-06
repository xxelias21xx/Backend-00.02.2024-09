Proceso Calculadora
	
	Escribir "Escriba el primer numero"
	Leer primerNumero
	Escribir "Escriba el segundo numero"
	Leer segundoNumero
	Escribir "Escriba la operacion: 1 si es suma, 2 si es resta, 3 si es multiplicacion, 4 si es division"
	Leer operacion
	
	si operacion == 1 Entonces
		Escribir "la respuesta es ", primerNumero + segundoNumero
	SiNo
		si operacion == 2 Entonces
			Escribir "la respuesta es ", primerNumero - segundoNumero
		SiNo
			si operacion == 3 Entonces
				Escribir "la respuesta es ", primerNumero * segundoNumero
			SiNo
				si operacion == 4 Entonces
					Escribir "La respuesta es ", primerNumero / segundoNumero
				SiNo
					Escribir "La operacion es incorrecta"
				FinSi
			FinSi
		FinSi
	FinSi
	
	
FinProceso
