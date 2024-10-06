Algoritmo AproximacionPi
	Definir i, n Como Entero
	Definir aprox_pi, termino Como Real
	
	Escribir "Introduce la cantidad de términos:"
	Leer n
	
	aprox_pi <- 0
	
	Para i <- 0 Hasta n-1 Con Paso 1 Hacer
		termino <- 4 / (2 * i + 1)
		Si i % 2 = 0 Entonces
			aprox_pi <- aprox_pi + termino
		Sino
			aprox_pi <- aprox_pi - termino
		FinSi
	FinPara
	
	Escribir "La aproximación de pi es: ", aprox_pi
FinAlgoritmo
