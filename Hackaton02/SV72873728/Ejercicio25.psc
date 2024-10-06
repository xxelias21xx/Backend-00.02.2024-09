Proceso Ejercicio25
	
	Escribir "Ingrese un número positivo"
	Leer num
	
	Mientras num < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese número"
		Leer num
	Fin Mientras
	
	Si num = 0 Entonces
		
		Factorial = 1
		Escribir "El factorial de ", num, " es ", factorial
		
	SiNo
		
		Factorial = 1
		i=1
		
		Repetir
			Factorial = Factorial * i
			i = i + 1
		Hasta Que i = num + 1
		
		Escribir "El factorial de ", num, " es ", factorial
		
	FinSi
	
FinProceso
