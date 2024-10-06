//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz.



Algoritmo  PiGregoryLeibniz
	
	Definir pi2,termino Como Real
	definir n , signo Como Entero
	pi2=0
	n=1;
	signo =1
	
	Definir  iteraciones como enteros
	
	Escribir  "Ingrese el numero de iteraciones";
	leer iteraciones;
	
	para i<-1 hasta iteraciones Hacer
		
		termino = 4/n
		pi2= pi2 +(signo*termino)
		
		signo =signo * (-1)
		n= n+2
	FinPara
	
	
	Escribir "La aproximacion de pi despues de ",iteraciones, " iteraciones es de: ",pi2
	
	
FinAlgoritmo