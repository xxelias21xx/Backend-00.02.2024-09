Proceso MayorYMenorDeVeinteNumeros
    Definir numero, mayor, menor Como Entero
	
    // Inicialización
    Escribir "Ingrese el número 1:"
    Leer numero
    mayor <- numero
    menor <- numero
	
    // Ciclo para ingresar los otros 19 números
    Para i <- 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
		
        // Verificar si el número actual es mayor que el máximo actual
        Si numero > mayor Entonces
            mayor <- numero
        Fin Si
		
        // Verificar si el número actual es menor que el mínimo actual
        Si numero < menor Entonces
            menor <- numero
        Fin Si
    Fin Para
	
    // Mostrar los resultados
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
Fin Proceso
