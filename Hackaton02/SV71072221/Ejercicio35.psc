// 35. Hacer un algoritmo en Pseint que nos permita saber 
// cuál es el número mayor y menor, se debe ingresar sólo 
// veinte números.
Proceso Ejercicio35
	Definir i, numMayor, numMenor Como Entero
	Escribir "Para analizar los 20 numeros, primero ingrese cada valor"
	i = 1
	Mientras i <= 20 Hacer
		Escribir "Ingrese el valor ", i, ":"
		Leer num
		Si i = 1 Entonces
			numMayor = num
			numMenor = num
		SiNo
			// Para numero mayor
			Si numMayor < num Entonces
				numMayor = num
			FinSi
			// Para numero menor
			Si numMenor > num Entonces
				numMenor = num
			FinSi
		FinSi
		i = i + 1
	FinMientras
	Escribir "Para todos los numeros ingresados, el mayor numero es el ", numMayor, " y el menor numero es ", numMenor, "."
FinProceso
