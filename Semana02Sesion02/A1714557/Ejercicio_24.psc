//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso SumaPares
	Definir suma,i Como Entero
	para i<-1 hasta 1000 Con Paso 1
		si i%2=0 Entonces
			suma= suma+i
		FinSi
	FinPara
	Escribir "La suma de los numeros pares hasta el 1000 es: ",suma
FinProceso
