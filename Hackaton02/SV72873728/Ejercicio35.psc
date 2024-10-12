Proceso Ejercicio35
	
	Para i<-1 Hasta 20 Con Paso 1 Hacer
		Escribir "Ingrese número ",i
		Leer num
		
		Si i = 1 Entonces
			menor = num
			mayor = num
		FinSi
		
		Si num > mayor Entonces
			mayor = num
		FinSi
		
		Si num < menor Entonces
			menor = num
		FinSi
	Fin Para
	
	Escribir "El número mayor es: ", mayor
	Escribir "El número menor es: ", menor
	
FinProceso
