Algoritmo Ejercicio35
    Definir i, numero, mayor, menor Como Entero

    mayor = -999999
    menor = 999999

    Para i Desde 1 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer numero
		

        Si numero > mayor Entonces
            mayor = numero
        FinSi
		

        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara

    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo
