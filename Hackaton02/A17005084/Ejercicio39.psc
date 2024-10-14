//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
//La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Proceso GregoryLeibniz
    Definir iter, i Como Entero
    Definir pi_value Como Real
	
    Escribir "Ingrese numero de sumandos de la serie: "
    Leer iter
    pi_value <- 0
	
    Para i Desde 0 Hasta iter - 1 Hacer
        pi_value <- pi_value + ((-1)^i) * (4 / (2 * i + 1))
    Fin Para
	
    Escribir "El valor aproximado de pi es:", pi_value
Fin Proceso
