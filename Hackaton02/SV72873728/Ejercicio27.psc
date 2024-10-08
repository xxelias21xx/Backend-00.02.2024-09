Proceso Ejercicio27
	
	num = 0
	i = 0
	suma = 0
	bandera = 1
	
	Mientras bandera = 1 Hacer
		Escribir "Ingrese un número positivo para sumar o un número negativo para terminar"
		Leer num
		Si num < 0 Entonces
			bandera = 0
		SiNo
			suma = suma + num
			i = i + 1
		FinSi

	Fin Mientras
	
	Si i = 0 Entonces
		escribir "No ingresó datos"
	SiNo
		media = suma / i
		Escribir "La media es: ", media
	FinSi

	
FinProceso
