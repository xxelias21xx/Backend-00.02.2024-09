//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.

Algoritmo NumeroPrimo
    Definir numero Como Entero
    Escribir "Ingrese un número entero positivo entre 1 y 10:"
    Leer numero
    
    Si numero < 1 o numero > 10 Entonces
        Escribir "El número debe estar entre 1 y 10."
    Sino
        Segun numero Hacer
            1: Escribir "1 no es primo."
            2: Escribir "2 es primo."
            3: Escribir "3 es primo."
            4: Escribir "4 no es primo."
            5: Escribir "5 es primo."
            6: Escribir "6 no es primo."
            7: Escribir "7 es primo."
            8: Escribir "8 no es primo."
            9: Escribir "9 no es primo."
            10: Escribir "10 no es primo."
        FinSegun
    FinSi
FinAlgoritmo
