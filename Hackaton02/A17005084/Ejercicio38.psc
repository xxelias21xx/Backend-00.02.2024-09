//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso NumeroPerfecto
    Definir num, sum, i Como Entero
	
    Escribir "Ingrese numero entero positivo: "
    Leer num
    sum <- 0
	
    Para i Desde 1 Hasta num - 1 Hacer
        Si num MOD i = 0 Entonces
            sum <- sum + i
        Fin Si
    Fin Para
	
    Si num = sum Entonces
        Escribir num, " es un numero perfecto"
    Sino
        Escribir num, " no es un numero perfecto"
    Fin Si
Fin Proceso
