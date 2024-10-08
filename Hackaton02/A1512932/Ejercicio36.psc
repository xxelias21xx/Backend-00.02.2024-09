Algoritmo Ejercicio36
    //36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	Definir n, a, b, siguiente Como Entero
    a = 0
    b = 1
	
    Escribir "Ingrese el número de términos de la serie de Fibonacci:"
    Leer n
	
    Escribir "Serie de Fibonacci:"
    Escribir a
    Escribir b
	
    Para i Desde 3 Hasta n Hacer
        siguiente = a + b
        Escribir siguiente
        a = b
        b = siguiente
    Fin Para
Fin Algoritmo	
	

