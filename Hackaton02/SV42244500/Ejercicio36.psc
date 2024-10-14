//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Ejercicio36
	
	Definir n, a, b, c, i Como Entero

    Escribir "Ingrese la cantidad de terminos de la serie de Fibonacci que desea calcular:"
    Leer n

    a = 0
    b = 1

    Escribir "Serie de Fibonacci:"
    Escribir a
    Escribir b

    Para i = 3 Hasta n Con Paso 1 Hacer
        c = a + b
        Escribir c
        a = b
        b = c
    Fin Para
	
FinProceso
