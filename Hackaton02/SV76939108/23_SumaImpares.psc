Algoritmo SumaImpares
	Definir n Como Entero
	Escribir "Ingrese un número  "
	Leer n
	suma<-0
	Para i<-1 Hasta n Con Paso 1 Hacer
		Si i mod 2<>0 Entonces
			suma<-suma+1
		FinSi
	Fin Para
	Escribir "La suma de los números impares menores o iguales a ",n, " es ",suma
FinAlgoritmo
