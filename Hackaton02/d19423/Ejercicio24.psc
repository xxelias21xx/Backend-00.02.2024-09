//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000

Algoritmo SumaNumerosParesHasta1000
    Definir suma, i Como Entero
    
 
    suma <- 0
    
 
    Para i <- 1 Hasta 1000 Con Paso 1 Hacer

        Si i % 2 = 0 Entonces
            suma <- suma + i
        FinSi
    FinPara
    

    Escribir "La suma de todos los números pares hasta el 1000 es: ", suma
    
FinAlgoritmo