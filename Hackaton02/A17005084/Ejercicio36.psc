//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso SerieFibonacci
	Definir n, i, fib1, fib2, fibSiguiente Como Entero

    Escribir "Ingrese el número de términos de la serie de Fibonacci: "
    Leer n

    Si n <= 0 Entonces
        Escribir "El número de términos debe ser mayor que 0."
	FinSi

fib1 <- 0
fib2 <- 1

Escribir "Serie de Fibonacci:"

Si n >= 1 Entonces
	Escribir fib1
FinSi

Si n >= 2 Entonces
	Escribir fib2
FinSi

Para i Desde 3 Hasta n Hacer
	fibSiguiente <- fib1 + fib2
	Escribir fibSiguiente
	
	fib1 <- fib2
	fib2 <- fibSiguiente
Fin Para
FinProceso
