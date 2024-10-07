//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso Ejercicio27
	
	Definir numero, suma, contador Como real
	
	Repetir
		Escribir "Ingrese un numero positivo"
		Leer numero
		
		si numero >= 0 Entonces
			suma = suma + numero
			contador = contador + 1
		FinSi
		
	Hasta Que numero < 0
	
	si contador > 0 Entonces
		Escribir "La media de los numeros ingresados es: ", suma/contador
	SiNo
		Escribir "No se ingresaron numeros positivos"
	FinSi
	
FinProceso
