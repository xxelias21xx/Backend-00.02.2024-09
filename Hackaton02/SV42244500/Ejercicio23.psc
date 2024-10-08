//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio23
	
	Definir n, suma, i Como Entero
	
	suma = 0
	
	Escribir "Ingrese un numero entero positivo"
	Leer n
	
	para i<-1 Hasta n con paso 1 Hacer
		si i %2 <> 0 Entonces
			suma = suma + i
		FinSi
		Escribir i
	FinPara
	
	Escribir "La suma de los numeros impares menores o iguales a ",n," es: ",suma
	
FinProceso
