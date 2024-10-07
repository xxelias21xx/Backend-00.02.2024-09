//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Ejercicio04
	
	Definir primerNumero, segundoNumero, tercerNumero, temp como entero
	
	Escribir "Escriba el primer numero"
	Leer primerNumero
	Escribir "Escriba el segundo numero"
	Leer segundoNumero
	Escribir "Escriba el tercer numero"
	Leer tercerNumero
	
	Si primerNumero > segundoNumero Entonces
		temp = primerNumero
		primerNumero = segundoNumero
		segundoNumero = temp
	FinSi
	
	Si primerNumero > tercerNumero Entonces
		temp = primerNumero
		primerNumero = tercerNumero
		tercerNumero = temp
	FinSi
	
	Si segundoNumero > tercerNumero Entonces
		temp = segundoNumero
		segundoNumero = tercerNumero
		tercerNumero = temp
	FinSi
	
	Escribir "Los numeros de menor a mayor son: " , primerNumero, ", ", segundoNumero, ", ", tercerNumero " "
	
FinProceso
