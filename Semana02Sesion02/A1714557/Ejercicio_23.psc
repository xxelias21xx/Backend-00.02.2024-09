//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares
//menores o iguales a n
Proceso Det_Suma
	
	Definir n,suma,i Como Entero
	suma=0
	Escribir "Ingresar un numero entero positivo:"
	leer n
	
	para i<-1 Hasta n Con Paso 1
		si i%2 <>0
			suma = suma+i
		FinSi
		Escribir i
	FinPara
	Escribir "La suma de los numeros impares es: ",suma
FinProceso
