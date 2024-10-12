//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso SumaNumerosImpares
	
	Escribir "Ingrese cantidad de numeros a sumar:"
	Leer NumeReco
	
	Si NumeReco<=0 Entonces
		Escribir "Numero ingresado debe ser mayor a 0"
	SiNo
		Definir  TotSuma,Inic Como Entero
		TotSuma=0
		Para Inic<-1 Hasta NumeReco Con Paso 1 Hacer
			si Inic %2 <> 0 entonces 
				TotSuma=TotSuma+Inic
			FinSi
		Fin Para
		Escribir  "La suma de los numero impares o iguales es: ", TotSuma
	Fin Si
FinProceso
