Algoritmo CalcularFactorial
    Definir numero, factorial, i Como Entero
    

    Escribir "Ingrese un número entero no negativo:"
    Leer numero
    

    Si numero < 0 Entonces
        Escribir "Error: El número debe ser no negativo."

FinSi


factorial <- 1


Para i <- 1 Hasta numero Hacer
	factorial <- factorial * i
FinPara

Escribir "El factorial de ", numero, " es: ", factorial

FinAlgoritmo



