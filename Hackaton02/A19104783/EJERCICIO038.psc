Proceso sin_titulo
	Definir numero, sumaDivisores, divisor Como Entero
	
    // Pedimos al usuario que ingrese un número
    Escribir "Ingrese un número: "
    Leer numero
	
    // Inicializamos la suma de divisores en 0
    sumaDivisores <- 0
	
    // Recorremos todos los divisores posibles (desde 1 hasta la mitad del número)
    Para divisor <- 1 Hasta trunc(numero/2) Hacer
        // Si el divisor es un divisor exacto, lo sumamos a la suma de divisores
        Si numero mod divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        FinSi
    FinPara
	
    // Verificamos si la suma de divisores es igual al número
    Si sumaDivisores = numero Entonces
        Escribir numero, " es un número perfecto."
    Sino
        Escribir numero, " no es un número perfecto."
    FinSi

FinProceso
