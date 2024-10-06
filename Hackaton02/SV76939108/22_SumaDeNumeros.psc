Algoritmo SumaDeNumeros
	Definir n Como Entero
	Escribir "Ingrese el valor de n"
	Leer n
	i<-1
	sumatoria<-0
	si n>0 entonces
		Mientras i<=n Hacer
			sumatoria<-sumatoria+i
			i<-i+1
		Fin Mientras
		Escribir "La suma de los ", n," es : ",sumatoria
	SiNo
		Escribir "El valor de n debe ser mayor a 0"
	fin si
FinAlgoritmo
