Algoritmo Ejercicio23
	//3. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
	Definir num, suma como entero
	suma=0
	
	Escribir "Alumnito, Ingrese un numero y se sumaran en cadena solo los numeros impares"
	Leer num
	
	Para i desde 1 hasta num Hacer
		si i mod 2 <> 0 Entonces
			Escribir i
			suma = suma + i
			FinSi
	FinPara
	
	Escribir "La suma de los números impares menores o iguales a :", num, " es: ", suma
FinAlgoritmo
