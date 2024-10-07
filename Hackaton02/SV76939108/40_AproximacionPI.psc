Algoritmo AproximacionPI
	Definir pi2, termino Como Real
	Definir n,signo Como Entero
	pi2<-3
	n<-2
	signo<-1
	Definir iteraciones Como Entero
	Escribir "Ingrese el número de iteraciones"
	Leer iteraciones
	Para i<-1 Hasta iteraciones Hacer
		termino<-4/(n*(n+1)*(n+2))
		pi2<-pi2+(signo*termino)
		signo<-signo*(-1)
		n<-n+2
	FinPara
	Escribir "La aproximación de pi despues de ", iteraciones, " iteraciones es de: ", pi2
FinAlgoritmo
