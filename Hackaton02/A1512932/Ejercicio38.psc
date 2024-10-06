Algoritmo Ejercicio38
	//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
    Definir num, suma Como Entero
    suma = 0
	
    Escribir "Ingrese un número entero positivo:"
    Leer num
	
    Para i Desde 1 Hasta num/2 Hacer
        Si num % i == 0 Entonces
            suma = suma + i
        Fin Si
    Fin Para
	
    Si suma == num Entonces
        Escribir num, " es un número perfecto."
    Sino
        Escribir num, " no es un número perfecto."
    Fin Si
Fin Algoritmo
