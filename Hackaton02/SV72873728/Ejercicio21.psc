Proceso Ejercicio21
	
	Escribir "Ingrese un número positivo"
	Leer num
	
	Mientras num < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese número"
		Leer num
	Fin Mientras
	
	Factorial = 1
	
	Para i<-1 Hasta num Con Paso 1 Hacer
		Factorial = Factorial * i
	Fin Para
	
	Escribir "El factorial de ", num, " es ", factorial
	
FinProceso
