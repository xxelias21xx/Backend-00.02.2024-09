Proceso Ejercicio23
	
	Escribir "Ingrese un número positivo"
	Leer num
	
	Mientras num < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese número"
		Leer num
	Fin Mientras
	
	Suma = 0
	
	Para i<-1 Hasta num Con Paso 1 Hacer
		Si (i mod 2) <> 0 Entonces
			Suma = Suma + i
		FinSi
	Fin Para
	
	Escribir "La suma de los primeros ", num, " números impares es ", Suma
	
FinProceso
