//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.



Algoritmo  calcularMedia
	
	Definir pi2,termino Como Real
	definir n , signo Como Entero
	pi2=3
	n=2;
	signo =1
	
	Definir  iteraciones como enteros
	
	Escribir  "Ingrese el numero de iteraciones";
	leer iteraciones;
	
	para i<-1 hasta iteraciones Hacer
		termino =4/(n*(n+1)*(n+2))
		pi2=pi2+(signo*termino)
		
		signo = signo* (-1)
		n= n+2
	FinPara
	
	
	Escribir "La aproximacion de pi despues de ",iteraciones, " iteraciones es de: ",pi2
	
	
FinAlgoritmo

