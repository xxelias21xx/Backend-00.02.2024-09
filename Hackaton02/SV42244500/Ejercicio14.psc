//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.
Proceso Ejercicio14
	
	Definir numero Como entero
	Escribir "Ingrese un numero entero positivo entre 1 y el 10"
	Leer numero
	
	Si numero < 1 o numero > 10 Entonces
        Escribir "El numero debe estar entre 1 y 10"
    Sino
        Segun numero Hacer
            1: Escribir "El numero 1 no es primo"
            2: Escribir "El numero 2 es primo"
            3: Escribir "El numero 3 es primo"
            4: Escribir "El numero 4 no es primo"
            5: Escribir "El numero 5 es primo"
            6: Escribir "El numero 6 no es primo"
            7: Escribir "El numero 7 es primo"
            8: Escribir "El numero 8 no es primo"
            9: Escribir "El numero 9 no es primo"
            10: Escribir "El numero 10 no es primo"
        FinSegun
    FinSi
		
FinProceso
