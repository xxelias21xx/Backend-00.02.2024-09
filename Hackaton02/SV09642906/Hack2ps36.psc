Proceso E36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	Definir n Como Entero
    Definir a, b, siguiente Como Entero
	
    Escribir "Ingrese el número de términos de la serie de Fibonacci que desea: "
    Leer n
	
    a <- 0
    b <- 1
	
    Escribir "Serie de Fibonacci:"
	
    Para i Desde 1 Hasta n Hacer
        Escribir a  // Imprimir el término actual
        siguiente <- a + b  // Calcular el siguiente término
        a <- b  // Actualizar a
        b <- siguiente  // Actualizar b
    Fin Para
Fin Proceso
