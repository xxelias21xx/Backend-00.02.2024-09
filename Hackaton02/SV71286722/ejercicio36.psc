Proceso SerieFibonacci
    Definir n, a, b, c, i Como Entero
	
    // Leer el número de términos de la serie que se desean calcular
    Escribir "Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular:"
    Leer n
	
    // Inicializar los dos primeros términos
    a <- 0
    b <- 1
	
    // Mostrar los dos primeros términos de la serie
    Escribir "Serie de Fibonacci:"
    Escribir a
    Escribir b
	
    // Calcular y mostrar los siguientes términos de la serie
    Para i <- 3 Hasta n Con Paso 1 Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c
    Fin Para
	
Fin Proceso
