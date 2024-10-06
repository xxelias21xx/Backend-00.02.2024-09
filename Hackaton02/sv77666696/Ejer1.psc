Proceso DeterminarTresDigitos
    Definir numero Como Entero
    Escribir "Ingresa un número:"
    Leer numero
    Si (numero >= 100 y numero <= 999) o (numero <= -100 y numero >= -999) Entonces
        Escribir "El número tiene tres dígitos."
    Sino
        Escribir "El número no tiene tres dígitos."
    FinSi
FinProceso
