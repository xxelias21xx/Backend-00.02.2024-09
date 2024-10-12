Proceso Ejercicio38
	
	Escribir "Ingrese número mayor a cero"
	Leer num1
	Mientras num1 < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese número mayor a cero"
		Leer num1
	Fin Mientras
	
	suma = 0
	
	Para i<-1 Hasta num1 Con Paso 1 Hacer
		si num1 mod i = 0 Entonces
			suma = suma + i
		FinSi
	Fin Para
	
	si suma - num1 = num1 Entonces
		Escribir "El número ", num1, " es un número perfecto"
	SiNo
		Escribir "El número ", num1, " no es un número perfecto"
	FinSi
	
FinProceso
