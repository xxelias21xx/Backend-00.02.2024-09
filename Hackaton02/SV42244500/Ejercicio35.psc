//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Proceso Ejercicio35
	
	Definir numero, mayor, menor Como Entero

    Escribir "Ingrese el numero 1:"
    Leer numero
	
    mayor = numero
    menor = numero

    Para i = 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numero

        Si numero > mayor Entonces
            mayor = numero
        Fin Si

        Si numero < menor Entonces
            menor = numero
        Fin Si
    Fin Para

    Escribir "El numero mayor es: ", mayor
    Escribir "El numero menor es: ", menor
	
FinProceso
