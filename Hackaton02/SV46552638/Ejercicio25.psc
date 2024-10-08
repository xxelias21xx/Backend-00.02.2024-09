Proceso Ejercicio25
	//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	resultado =1
	Repetir
		Escribir "Ingrese un numero positivo"
		Leer num
	Hasta Que (num>0)
	Escribir "Forma 2"
	i=1
	Mientras i <= num Hacer
		resultado=resultado*i
		i=i+1
	Fin Mientras
	Escribir "El factorial de: ", num," es: ", resultado
	resultado =1

FinProceso
