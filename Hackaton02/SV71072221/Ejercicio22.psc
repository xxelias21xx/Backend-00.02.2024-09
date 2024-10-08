// 22. Hacer un algoritmo en Pseint para calcular 
// la suma de los n primeros números.
Proceso Ejercicio22
	Definir  n, i, suma Como Entero
	Escribir "Ingrese la cantidad de numeros a sumar"
	leer n
	Dimension bloque(n)
	i = 1
	Mientras i <= n Hacer
		Escribir "Ingrese el numero N", i, ",:"
		Leer bloque(i)
		suma = suma + bloque(i)
		i = i + 1
	FinMientras
	Escribir "La suma de los primeros ", n, " numeros es " suma, "."
FinProceso
