Proceso Ejercicio39
	//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	
    //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	Escribir "Exactitud de Pi con la serie de Gregory-Leibniz."
	Escribir "ingrese el numero de factores a calcular"
	Leer n
	aprox= 0.0
	Para i=0 Hasta n Con Paso 1 Hacer
		iteracion = ((-1)^i)/(2*i+1)
		aprox=aprox+iteracion
	Fin Para
	phi = 4*aprox
	Escribir "Valor de Pi : ", phi

FinProceso
