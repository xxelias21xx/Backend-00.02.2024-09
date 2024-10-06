Proceso VerificarNumeroPrimo
    Definir numero Como Entero
    Definir esPrimo Como Logico
	
    // Solicitar al usuario que ingrese un número del 1 al 10
    Escribir "Ingrese un número entero positivo del 1 al 10: "
    Leer numero
	
    // Determinar si el número es primo
	esPrimo <- Verdadero // Asumimos que es primo
	Si numero = 1 Entonces
		esPrimo <- Falso // 1 no es primo
	FinSi
	
	Si numero = 2 O numero = 3 Entonces
		esPrimo <- Verdadero // 2 y 3 son primos
	Sino
		Para i Desde 2 Hasta Raiz(numero) Hacer
			Si numero % i = 0 Entonces
				esPrimo <- Falso // No es primo
				//Una optimización sería salir del ciclo para
			FinSi
		FinPara
	FinSi
	
	// Mostrar el resultado
	Si esPrimo Entonces
		Escribir "El número ", numero, " es primo."
	Sino
		Escribir "El número ", numero, " no es primo."
	FinSi
FinProceso
