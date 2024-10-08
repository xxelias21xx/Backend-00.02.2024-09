//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. 
//La formula que se debe aplicar es:
//Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
Proceso Nilakantha
    Definir iter, i Como Entero
    Definir parcial_pi, pi_value Como Real
	
    Escribir "Ingrese numero de sumandos de la serie: "
    Leer iter
    parcial_pi <- 0
	
    Para i Desde 1 Hasta iter Hacer
        parcial_pi <- parcial_pi + ((-1)^(i + 1)) * (4 / ((2 * i) * (2 * i + 1) * (2 * i + 2)))
    Fin Para
	
    pi_value <- 3 + parcial_pi
    Escribir "El valor aproximado de pi es:", pi_value
Fin Proceso