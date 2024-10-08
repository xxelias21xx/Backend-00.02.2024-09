Algoritmo Ejercicio24
	//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000
	Definir num, suma como entero
	suma=0
	
	Escribir "Alumnito, Ingrese un numero y se sumaran en cadena solo los numeros pares"
	Leer num
	
	Para i desde 1 hasta num Hacer
		si i <= 1000 Entonces
			si i mod 2 = 0 Entonces
			Escribir i
			suma = suma + i
			finsi	
		SiNo
			Escribir "Ups!, Alumnito ha ingreso un numero no permitido"
		FinSi
	FinPara
	
	Escribir "La suma de los números pares menores o iguales a :", num, " es: ", suma
FinAlgoritmo
