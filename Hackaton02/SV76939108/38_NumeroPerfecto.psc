Algoritmo NumeroPerfecto
	Definir num, suma, i Como Entero
	Escribir "Ingrese el número entero positivo:"
	Leer num
	suma<-0
	Para i<-1 Hasta num-1 Con Paso 1 Hacer
		Si num%i=0 Entonces
			suma<-suma+i
		FinSi
	FinPara
	Si suma=num Entonces
		Escribir "El número ",num," es perfecto."
	SiNo
		Escribir "El número ",num, " NO es perfecto"
	FinSi
FinAlgoritmo
