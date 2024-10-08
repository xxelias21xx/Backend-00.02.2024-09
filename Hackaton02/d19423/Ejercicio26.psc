//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Algoritmo CocienteYRestoPorRestasSucesivas
    Definir dividendo, divisor, cociente, resto Como Entero
    

    Escribir "Ingrese el dividendo (número a dividir):"
    Leer dividendo
    Escribir "Ingrese el divisor (número por el cual dividir):"
    Leer divisor
    

    Si divisor = 0 Entonces
        Escribir "Error: El divisor no puede ser 0."

FinSi


cociente <- 0
resto <- dividendo


Mientras resto >= divisor Hacer
	resto <- resto - divisor
	cociente <- cociente + 1
FinMientras


Escribir "El cociente es: ", cociente
Escribir "El resto es: ", resto

FinAlgoritmo
