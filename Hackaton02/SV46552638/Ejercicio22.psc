Proceso Ejercicio22
	//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros n�meros.
	acumulador =0
	Repetir
		Escribir "Ingrese un numero positivo"
		Leer num
	Hasta Que (num>0)
	Escribir "Forma 1- estructura repetitiva"
	Para i=1 Hasta num Con Paso paso Hacer
		acumulador=acumulador+i
		i=i+1
	Fin Para
	Escribir "La sumatoria de los ", num," primeros numeros es: ", acumulador
	
	Escribir "Forma 2- operacion aritmetica"
	acumulador =0
	acumulador= ((num)*(num+1))/2
	Escribir "La sumatoria de los ", num," primeros numeros es: ", acumulador
FinProceso
