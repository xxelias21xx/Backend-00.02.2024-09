Proceso DeterminarSiTerminaEnCuatro
    Definir numero Como Entero
    Definir ultimo_digito Como Entero
    Escribir "Ingresa un número:"
    Leer numero
    ultimo_digito = Abs(numero) Mod 10
    Si ultimo_digito = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número no termina en 4."
    FinSi
FinProceso
