Proceso Ejercicio24
	//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
	acumulador=0
	Para i=1 Hasta 1000 Con Paso paso Hacer
		Si i MOD 2 == 0 Entonces
			acumulador=acumulador+i
		Fin Si
		
		i=i+1
	Fin Para
	Escribir "La sumatoria de los numeros pares es hasta el 1000 es: ", acumulador
FinProceso
