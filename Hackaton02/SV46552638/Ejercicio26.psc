Proceso Ejercicio26
	//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	cociente=0
	residuo=0
	Escribir "Ingrese el Dividendo: "
	Leer dividendo
	
	Escribir "Ingrese el Divisor: "
	Leer divisor
	
	Mientras dividendo > divisor Hacer
		residuo=dividendo-divisor
		cociente = cociente+1
		dividendo=residuo
	Fin Mientras
	Escribir "Cociente: ", cociente
	Escribir "Residuo: ", residuo
FinProceso
