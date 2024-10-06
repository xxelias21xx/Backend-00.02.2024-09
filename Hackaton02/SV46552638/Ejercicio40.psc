Proceso Ejercicio40
	//. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
	
    //Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	
	Escribir "Exactitud de Pi con la serie de Nilakantha."
	Escribir "ingrese el numero de factores a calcular"
	Leer n
	aprox= 3
	Para i=1 Hasta n Con Paso 1 Hacer
		iteracion = (4 * ((-1)^(i+1))) / ((2*i)*(2*i+1)*(2*i+2))
		aprox=aprox+iteracion
	Fin Para
	Escribir "Valor de Pi : ", aprox
FinProceso
