Algoritmo Fibonacci
    Definir n, i, a, b, siguiente Como Entero
    Escribir "Introduce la cantidad de términos de la serie de Fibonacci:"
    Leer n
	
    a <- 0
    b <- 1
	
    Escribir "Serie de Fibonacci:"
    Para i <- 1 Hasta n Hacer
        Escribir a
        siguiente <- a + b
        a <- b
        b <- siguiente
    FinPara
FinAlgoritmo
