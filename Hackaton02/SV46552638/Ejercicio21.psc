Proceso Ejercicio21
	//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	resultado =1
	Repetir
		Escribir "Ingrese un numero positivo"
		Leer num
	Hasta Que (num>0)
	
	Para i=1 Hasta num Con Paso paso Hacer
		resultado=resultado*i
		i=i+1
	Fin Para
	Escribir "El factorial de: ", num," es: ", resultado

FinProceso
