Proceso CalcularMedia
    Definir numero, suma Como Real
    Definir contador Como Entero
    suma <- 0
    contador <- 0
	
    // Leer números hasta que se ingrese un número negativo
	Repetir
        Escribir "Ingrese un número positivo (o un número negativo para terminar): "
        Leer numero
        
		Si numero >= 0 Entonces
        // Acumular la suma y el contador
        suma <- suma + numero
        contador <- contador + 1
		FinSi
    Hasta Que numero < 0
	
    // Calcular y mostrar la media si se ingresaron números
    Si contador > 0 Entonces
        Escribir "La media de los números ingresados es: ", suma / contador
    Sino
        Escribir "No se ingresaron números positivos."
    Fin Si
Fin Proceso
