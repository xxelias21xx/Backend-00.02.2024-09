Algoritmo Ejercicio27
	//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	Definir num Como Real
	suma = 0
	contador = 0
	
	escribir "Ingrese solo numeros positivos para hallar la media o un negativo para terminar:"
	Leer num
	
	Mientras  num >= 0 hacer
		suma = suma + num
		contador = contador + 1
		Leer num
	FinMientras
	
		
	Si contador > 0 Entonces
        Escribir "La media es: ", suma / contador
    SiNo
		Escribir "No se ingresaron números positivos."
    FinSi
	
FinAlgoritmo
