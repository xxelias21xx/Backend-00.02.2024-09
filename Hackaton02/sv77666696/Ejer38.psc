Algoritmo NumeroPerfecto
    Definir num, i, suma Como Entero
    Escribir "Introduce un número:"
    Leer num
	
    suma <- 0
    Para i <- 1 Hasta num-1 Con Paso 1 Hacer
        Si num % i = 0 Entonces
            suma <- suma + i
        FinSi
    FinPara
	
    Si suma = num Entonces
        Escribir "El número", num, "es un número perfecto."
    Sino
        Escribir "El número", num, "no es un número perfecto."
    FinSi
FinAlgoritmo
