Proceso Ejercicio37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	dividendo=-1
	divisor=-1
	cociente=-1
	residuo=-1
	mcd=-1
	Escribir "Ingrese primer numero"
	Leer num1
	Escribir "Ingrese segundo numero"
	Leer num2
	
	Escribir num1
	Escribir num2
	
	Si num1 > num2 Entonces
		dividendo <- num1
		divisor <- num2
	SiNo
		dividendo <- num2
		divisor <- num1
	Fin Si
	
	
	Mientras residuo <> 0 Hacer
		cociente = dividendo/divisor
		cociente = trunc(cociente)
		residuo = dividendo MOD divisor
		dividendo = divisor
		divisor = residuo
		si divisor == 0 Entonces
			divisor =dividendo
		FinSi
		
	Fin Mientras

	
	Escribir "MCD:",num1," y ",num2," es: ", divisor
	
FinProceso