Proceso E40   
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. 
    //La formula que se debe aplicar es:
	//Pi = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
	Definir n, i Como Entero
    Definir py Como Real
	
    Escribir "Ingrese el número de términos para la aproximación de Pi: "
    Leer n
	
    py <- 3  // Iniciar con 3, que es el primer término de la serie
	
    Para i Desde 1 Hasta n Hacer
        // Calcular los términos en función de i
        Definir numerador Como Real
        Definir denominador Como Entero
		
        denominador <- 2 * i * (2 * i + 1) * (2 * i + 2)  // Producto de tres números consecutivos
        numerador <- 4
		
        Si i Mod 2 = 0 Entonces
            py <- py + (numerador / denominador)  // Sumar para términos pares
        Sino
            py <- py - (numerador / denominador)  // Restar para términos impares
        Fin Si
    Fin Para
	
    Escribir "La aproximación de Pi con ", n, " términos es: ", pi
Fin Proceso
