Proceso E39
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz.
    //La formula que se debe aplicar es:
	
	//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	
	Definir n, i Como Entero
    Definir py Como Real
	
    Escribir "Ingrese el número de términos para la aproximación de Pi: "
    Leer n
	
    py <- 0
	
    Para i Desde 0 Hasta n - 1 Hacer
        Si i % 2 = 0 Entonces  // Usamos la operación de resto
            py <- py + (4 / (2 * i + 1))  // Sumar para términos pares
        Sino
            py <- py - (4 / (2 * i + 1))  // Restar para términos impares
        Fin Si
    Fin Para
	
    Escribir "La aproximación de Pi con ", n, " términos es: ", pi
Fin Proceso	// serie de Gregory-Leibniz
    
