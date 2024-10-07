// 39. Hacer un algoritmo en Pseint que cumpla con la aproximación 
// del número pi con la serie de Gregory-Leibniz. La formula que se 
// debe aplicar es:
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso Ejercicio39
	Definir pi2,termino Como Real
	definir n , signo, iteraciones Como Entero
	pi2=0
	n=1;
	signo =1
	Escribir  "Ingrese el numero de replicaciones del estudio del numero PI";
	leer iteraciones;
	para i<-1 hasta iteraciones Hacer
		termino = 4/n
		pi2= pi2 +(signo*termino)
		signo =signo * (-1)
		n= n+2
	FinPara
	Escribir "La aproximacion de pi despues de ",iteraciones, " replicaciones es de: ",pi2
FinProceso
