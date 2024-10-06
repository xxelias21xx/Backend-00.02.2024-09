Proceso CalcularFactorial
    Definir numero, factorial Como Entero
	
    // Leer un número entero positivo
    Escribir "Ingrese un número entero positivo: "
    Leer numero
	
    // Inicializar el factorial
    factorial <- 1
	
    // Calcular el factorial usando un bucle
	Si numero <> 0 Entonces
		Para i Desde 1 Hasta numero Hacer
			factorial <- factorial * i
		Fin Para
	FinSi
	
    // Mostrar el resultado
    Escribir "El factorial de ", numero, " es: ", factorial
Fin Proceso
