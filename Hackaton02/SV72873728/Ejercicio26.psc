Proceso Ejercicio26
	
	Escribir "Ingrese el dividendo: "
    Leer dividendo
    Escribir "Ingrese el divisor: "
    Leer divisor
	
	Si divisor = 0 Entonces
		Escribir "No se puede dividir entre 0"
	SiNo
		resto = dividendo
		
		Mientras resto >= divisor Hacer
			resto = resto - divisor
			i = i + 1
		Fin Mientras
		
		Escribir "El cociente es: ", i
		Escribir "El resto es: ", resto
		
	FinSi
	
FinProceso
