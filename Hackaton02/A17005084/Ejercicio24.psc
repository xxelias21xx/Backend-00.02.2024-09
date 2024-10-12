//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso SumaMil
	Definir SumPar,Ini Como Entero
	SumPar=0
	Para Ini<-1 Hasta 1000 Con Paso 1 Hacer
		si Ini %2 = 0 entonces 
			SumPar=SumPar+Ini
		FinSi
	Fin Para
	Escribir  "La suma de los numero pares hasta mil es: " SumPar
FinProceso
