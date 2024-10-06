Proceso ejercicio39

	
    // Pedimos al usuario el número de términos a calcular
    Escribir "Ingrese el número de términos para la aproximación de Pi: "
    Leer n
	
    // Inicializamos las variables
    p <- 0
    termino <- 4
	
    // Calculamos la aproximación de Pi
    Para i <- 1 Hasta n Hacer
        p <- p + termino / (2 * i - 1)
        termino <- -termino  // Cambiamos el signo del término
    FinPara
	
    // Mostramos el resultado
    Escribir "La aproximación de Pi con ", n, " términos es: ", pi

	
FinProceso
