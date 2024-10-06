Proceso Ejercicio11
	// Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	numeroMayor=-999
	Para i<-1 Hasta 3 Con Paso paso Hacer
		Escribir "Ingrese ", i,"º numero: "
		Leer num
		Si num >= numeroMayor Entonces
			numeroMayor = num
		Fin Si
		i=i+1
	Fin Para
	Escribir numeroMayor," es el numero mayor"
FinProceso
