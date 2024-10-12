//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso Ejercicio31
	
	Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares Como Entero
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0

    Para i = 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el numero", i, ":"
        Leer numero

        Si numero % 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        Fin Si
    Fin Para

    Si contadorPares > 0 Entonces
        Escribir "La media de los numeros pares es: ", sumaPares / contadorPares
    Sino
        Escribir "No se ingresaron numeros pares."
    Fin Si

    Si contadorImpares > 0 Entonces
        Escribir "La media de los numeros impares es: ", sumaImpares / contadorImpares
    Sino
        Escribir "No se ingresaron numeros impares."
    Fin Si
	
FinProceso
