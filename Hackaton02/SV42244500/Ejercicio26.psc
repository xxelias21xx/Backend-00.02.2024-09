//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso Ejercicio26
	
	Definir dividendo, divisor, cociente, resto Como Entero

    Escribir "Ingrese el dividendo ( numero entero positivo ): "
    Leer dividendo
    Escribir "Ingrese el divisor ( numero entero positivo ): "
    Leer divisor

    cociente = 0
    resto = dividendo

    Si divisor = 0 Entonces
        Escribir "Error: El divisor no puede ser cero"
    Sino

        Mientras resto >= divisor Hacer
            resto = resto - divisor
            cociente = cociente + 1
        Fin Mientras

        Escribir "Cociente: ", cociente
        Escribir "Resto: ", resto
    Fin Si
	
FinProceso
