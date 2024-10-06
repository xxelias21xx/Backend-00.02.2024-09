//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.	

Algoritmo  determinarVocal
	
	Definir  n, suma, i Como Entero
	
	suma=0;
	
	Escribir  "ingrese un numero entero positivo";
	leer n;
	
	para i<-1 hasta n con paso 1 Hacer
		
		si i %2 <> 0 entonces 
			suma = suma+i
		FinSi
		Escribir i
	FinPara
	
	escribir "la suma de los numeros impares menores o iguales a ",n," es: ",suma
	
FinAlgoritmo