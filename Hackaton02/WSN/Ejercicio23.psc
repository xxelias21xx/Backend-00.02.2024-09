
	Algoritmo Ejercicio23
		//Hacer un algoritmo en Pseint para calcular la suma de los 
		//números impares menores o iguales a n.

		Definir n, suma, i Como Entero
		
	
		suma = 0
	
		Escribir "Ingrese el valor de n: "
		Leer n

		i = 1
		Mientras i <= n Hacer
			suma = suma + i
			i = i + 2
		FinMientras
		
		
		Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinAlgoritmo

