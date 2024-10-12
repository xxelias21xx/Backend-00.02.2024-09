// Definimos la función factorial
Funcion retorno <- Factorial(n)
	Si n = 0 Entonces
		retorno <- 1
	SiNo
		retorno <- n * Factorial(n-1)
	FinSi
Fin Funcion

Proceso CalcularFactorial
    Definir numero, resultado Como Entero
	
    // Leer un número entero no negativo
    Escribir "Ingrese un número entero no negativo: "
    Leer numero
	
    // Calcular el factorial utilizando recursividad
    resultado <- Factorial(numero)
	
    // Mostrar el resultado
    Escribir "El factorial de ", numero, " es: ", resultado
Fin Proceso
