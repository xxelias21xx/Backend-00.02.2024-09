//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio21
	
	Definir numero, factorial Como Entero

    Escribir "Ingrese un numero entero positivo: "
    Leer numero
	
    factorial = 1
	
	Si numero <> 0 Entonces
		Para i Desde 1 Hasta numero Hacer
			factorial = factorial * i
		Fin Para
	FinSi

    Escribir "El factorial de ", numero, " es: ", factorial
	
FinProceso
