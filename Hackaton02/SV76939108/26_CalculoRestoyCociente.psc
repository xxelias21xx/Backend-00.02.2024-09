Algoritmo CalculoRestoyCociente
	Escribir "Ingrese el dividendo: "
	Leer div
	Escribir "Ingrese el divisor: "
	Leer divisor
	cociente<-0
	resto<-div
	Mientras resto >= divisor Hacer
		resto<-resto-divisor
		cociente<-cociente+1
	FinMientras
	Si divisor=0 Entonces
		Escribir "No se puede dividir entre cero."
	FinSi
	Escribir "El cociente es: ", cociente
	Escribir "El residuo es: ", resto
FinAlgoritmo
