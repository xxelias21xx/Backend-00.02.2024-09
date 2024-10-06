Algoritmo Ejercicio25
    Definir n, factorial, contador Como Entero
	

    Escribir "Introduce un número para calcular su factorial: "
    Leer n
	
    factorial = 1
    contador = n
	
    Mientras contador > 0 Hacer
        factorial = factorial * contador
        contador = contador - 1
    Fin Mientras
	
    Escribir "El factorial de ", n, " es: ", factorial
FinAlgoritmo
