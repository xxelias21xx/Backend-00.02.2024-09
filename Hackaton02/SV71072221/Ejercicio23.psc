// 23. Hacer un algoritmo en Pseint para calcular la suma 
// de los números impares menores o iguales a n.
Proceso Ejercicio23
	Definir n, i, sumaImpar Como Entero
	Escribir "Ingrese un numero para evaluar:"
	leer n
	i = 1
	Mientras i <= n Hacer
		Si i mod 2 <> 0 Entonces
			sumaImpar = sumaImpar + i
		FinSi
		i = i + 1
	FinMientras
	Escribir "La suma de los numeros impares menores o iguales a ", n, " es ",sumaImpar, "."
FinProceso
