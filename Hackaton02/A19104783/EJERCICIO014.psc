Proceso EJERCICIO14
	//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.
	Definir numero, divisor, contador Como Entero
	
    // Solicitar al usuario un número entre 1 y 10
    Escribir "Ingrese un número entero positivo entre 1 y 10: "
    Leer numero
	
    // Validar que el número esté dentro del rango
    Si (numero < 1) O (numero > 10) Entonces
        Escribir "El número ingresado está fuera del rango."
    SiNo
        // Inicializar el contador de divisores
        contador <- 0
		
        // Iterar desde 2 hasta la mitad del número
        Para divisor <- 2 Hasta trunc(numero/2) Hacer
            // Si el número es divisible entre divisor, no es primo
            Si numero MOD divisor = 0 Entonces
                contador <- contador + 1
            FinSi
        FinPara
		
        // Verificar si el número es primo
        Si contador = 0 Entonces
            Escribir numero, " es un número primo."
        SiNo
            Escribir numero, " no es un número primo."
        FinSi
    FinSi



	

	
FinProceso
