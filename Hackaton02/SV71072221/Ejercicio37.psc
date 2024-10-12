// 37. Hacer un algoritmo en Pseint para conseguir el M.C.D 
// de un número por medio del algoritmo de Euclides.
Proceso Ejercicio37
	Definir num1, num2 Como Entero
	Escribir "Ingrese un numero A a calcular el MCM:"
	Leer  num1
	Escribir "Ingrese un numero B a calcular el MCM:"
	Leer  num2
	Mientras num2 <> 0 Hacer
		ficticio = num2
		num2 = num1 % num2
		num1 = ficticio
	FinMientras
	Escribir "El MCM es: ", num1, "."
FinProceso
