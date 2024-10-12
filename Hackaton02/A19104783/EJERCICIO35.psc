Proceso EJERCICIO35
	Definir numero, mayor, menor, i Como Entero
	
    // Inicializamos mayor y menor con el primer número ingresado
    Escribir "Ingrese el primer número: "
    Leer numero
    mayor <- numero
    menor <- numero
	
    // Ciclo para los siguientes 19 números
    Para i <- 2 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer numero
		
        // Comparar con el mayor
        Si numero > mayor Entonces
            mayor <- numero
        FinSi
		
        // Comparar con el menor
        Si numero < menor Entonces
            menor <- numero
        FinSi
    FinPara
	
    // Mostrar resultados
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor

	
FinProceso
