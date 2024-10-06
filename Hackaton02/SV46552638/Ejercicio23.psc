Proceso Ejercicio23
	//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
	acumulador =0
	Repetir
		Escribir "Ingrese un numero positivo"
		Leer num
	Hasta Que (num>0)
	
	Para i=1 Hasta num Con Paso paso Hacer
		Si i MOD 2 == 1 Entonces
			acumulador=acumulador+i
		Fin Si
		
		i=i+1
	Fin Para
	Escribir "La sumatoria de los ", num," primeros numeros impares es: ", acumulador

FinProceso
