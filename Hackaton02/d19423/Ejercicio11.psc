//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Algoritmo MayorDeTresNumeros
    Definir num1, num2, num3 Como Entero
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    
    Si num1 > num2 y num1 > num3 Entonces
        Escribir "El número mayor es: ", num1
    Sino
        Si num2 > num3 Entonces
            Escribir "El número mayor es: ", num2
        Sino
            Escribir "El número mayor es: ", num3
        FinSi
    FinSi
FinAlgoritmo
