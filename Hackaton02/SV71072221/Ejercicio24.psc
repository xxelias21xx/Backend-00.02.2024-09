// 24. Hacer un algoritmo en Pseint para realizar la 
// suma de todos los números pares hasta el 1000.
Proceso Ejercicio24
	i = 1
	sumaPar = 0
	mientras i <= 1000 Hacer
		Si i mod 2 = 0 Entonces
			sumaPar = sumaPar + i
		FinSi
		i = i + 1
	FinMientras
	Escribir "La suma de los primeros numero pares hasta el 1000 es ", sumaPar, "."
FinProceso
