Proceso Ejercicio_1
	//1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
	Escribir "Ingrese un numero"
	Leer numerox
	Si (numerox>99 y numerox<1000)  Entonces
		Escribir numerox," Es un numero positivo de 3 cifras"
	SiNo
		
		Si (numerox<-99 y numerox>-1000)  Entonces
			Escribir numerox," Es un numero negativo de 3 cifras"
		SiNo
			Escribir numerox," No es un numero de 3 cifras"
		Fin Si
		
	Fin Si
	
	
FinProceso
