//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Algoritmo SumaNPrimerosNumeros
    Definir n, suma, i Como Entero
    
 
    Escribir "Ingrese un número entero positivo (n):"
    Leer n
    

    Si n <= 0 Entonces
        Escribir "Error: El número debe ser positivo."

FinSi


suma <- 0

Para i <- 1 Hasta n Hacer
	suma <- suma + i
FinPara


Escribir "La suma de los primeros ", n, " números es: ", suma

FinAlgoritmo



