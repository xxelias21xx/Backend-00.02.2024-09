Algoritmo AproxPIGregory_Leibniz
	Definir pi2, termino Como Real
	Definir n,signo Como Entero
	pi2<-0
	n<-1
	signo<-1
	Definir iteraciones Como Enteros
	Escribir "Ingrese el número de iteraciones"
	Leer iteraciones
	Para i<-1 Hasta iteraciones Hacer
		termino<-4/n
		pi2<-pi2+(signo*termino)
		signo<-signo*(-1)
		n<-n+2
	FinPara
	Escribir "La aproximación de pi despues de ", iteraciones, " iteraciones es de: ", pi2
FinAlgoritmo
