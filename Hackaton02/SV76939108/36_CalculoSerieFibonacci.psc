Algoritmo CalculoSerieFibonacci
	Definir n, i Como Entero
	Definir fib1, fib2, sig Como Entero
	fib1<-0
	fib2<-1
	Escribir "Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular: "
	Leer n
	si n>=0 Entonces
		Escribir "Serie de Fibonacci: "
		Para i Desde 1 Hasta n Hacer
			Si i=1 Entonces
				Escribir fib1
			SiNo
				Si i=2 Entonces
					Escribir fib2
				SiNo
					sig<-fib1+fib2
					Escribir sig
					fib1<-fib2
					fib2<-sig
				FinSi
			FinSi
		FinPara
	SiNo
		Escribir "Ingresar un número mayor a cero."
	FinSi
FinAlgoritmo
