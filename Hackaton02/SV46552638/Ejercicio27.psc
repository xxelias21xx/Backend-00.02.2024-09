Proceso Ejercicio27
	//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	
	acumulador = 0.0
	num=-1
	contador =0
	Repetir
		Escribir "Ingrese un numero positivo para calcular, o uno negativo para mostar el resultado "
		Leer num
		Si num>0 Entonces
			acumulador=acumulador+num
			contador = contador+1
		Fin Si
		
	Hasta Que num <0
	
	//evitando la division entre 0
	Si contador == 0 Entonces
		Escribir "El proceso no se puedo efectuar "
	SiNo
		Escribir "El promedio es ", acumulador/contador
	Fin Si
	
FinProceso
