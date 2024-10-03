Proceso CalculadoraV3
	
	bandera = Verdadero
	
	
	Mientras bandera Hacer
		Escribir "Escriba la operacion: 1 si es suma, 2 si es resta, 3 si es multiplicacion, 4 si es division, si deseas salir escribe 0"
		Leer operacion
		
		Escribir "Escriba el primer numero"
		Leer primerNumero
		Escribir "Escriba el segundo numero"
		Leer segundoNumero
		
		
		Segun operacion Hacer
			1:
				Escribir "la respuesta es ", primerNumero + segundoNumero
			2:
				Escribir "la respuesta es ", primerNumero - segundoNumero
			3:
				Escribir "la respuesta es ", primerNumero * segundoNumero
			4:
				Escribir "la respuesta es ", primerNumero / segundoNumero
			0: 
				bandera = Falso
			De Otro Modo:
				Escribir "La operacion es incorrecta"
		Fin Segun
		Escribir "si deseas salir escribe 0 o si deseas continuar escribe 1"
		Leer operacion
		
		si operacion == 0 Entonces
			bandera = Falso
		FinSi
		
	Fin Mientras
FinProceso
