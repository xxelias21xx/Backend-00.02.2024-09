Proceso MediaParesImpares
    Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares Como Entero
    sumaPares <- 0
    sumaImpares <- 0
    contadorPares <- 0
    contadorImpares <- 0
	
    // Ciclo para ingresar 10 números
    Para i <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
		
        // Verificar si el número es par o impar
        Si numero % 2 = 0 Entonces
            sumaPares <- sumaPares + numero
            contadorPares <- contadorPares + 1
        Sino
            sumaImpares <- sumaImpares + numero
            contadorImpares <- contadorImpares + 1
        Fin Si
    Fin Para
	
    // Calcular y mostrar la media de los pares
    Si contadorPares > 0 Entonces
        Escribir "La media de los números pares es: ", sumaPares / contadorPares
    Sino
        Escribir "No se ingresaron números pares."
    Fin Si
	
    // Calcular y mostrar la media de los impares
    Si contadorImpares > 0 Entonces
        Escribir "La media de los números impares es: ", sumaImpares / contadorImpares
    Sino
        Escribir "No se ingresaron números impares."
    Fin Si
Fin Proceso
