Proceso E27
	//Hacer un algoritmo en Pseint para determinar la media de una lista 
	//indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	Definir numero Como Real
    Definir suma Como Real
    Definir contador Como Entero
    Definir media Como Real
	
    // Inicializar variables
    suma <- 0
    contador <- 0
	
    // Leer números indefinidamente
    Mientras Verdadero Hacer
        Escribir "Ingresa un número positivo (o un número negativo para terminar):"
        Leer numero
		
        // Verificar si el número es negativo
        Si numero < 0 Entonces
            Si contador = 0 Entonces
                Escribir "No se ingresaron números positivos."
            Sino
                media <- suma / contador
                Escribir "La media de los números ingresados es: ", media
            Fin Si
		Sino
            // Sumar el número y contar
            suma <- suma + numero
            contador <- contador + 1
        Fin Si
    Fin Mientras
Fin Proceso

