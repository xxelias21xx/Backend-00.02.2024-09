Proceso EJERCICIO36
	Definir n, a, b, c Como Entero
	
    // Pedir al usuario el número de términos
    Escribir "Ingrese el número de términos de la serie de Fibonacci: "
    Leer n
	
    // Inicializar los primeros dos términos de la serie
    a <- 0
    b <- 1
	
    // Mostrar los primeros dos términos
    Escribir a
    Escribir b
	
    // Calcular y mostrar los demás términos
    Para i <- 3 Hasta n Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c 
    FinPara
	
FinProceso

