Proceso E31
	//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	Definir num Como Entero
    Definir sumaPares, sumaImpares Como Real
    Definir contadorPares, contadorImpares Como Entero
	
    sumaPares <- 0
    sumaImpares <- 0
    contadorPares <- 0
    contadorImpares <- 0
	
    Para i Desde 1 Hasta 10 Hacer
        Escribir "Ingrese un número: "
        Leer num
		
        Si num Mod 2 = 0 Entonces
            sumaPares <- sumaPares + num
            contadorPares <- contadorPares + 1
        Sino
            sumaImpares <- sumaImpares + num
            contadorImpares <- contadorImpares + 1
        Fin Si
    Fin Para
	
    Si contadorPares > 0 Entonces
        Escribir "La media de los números pares es: ", sumaPares / contadorPares
    Sino
        Escribir "No se ingresaron números pares."
    Fin Si
	
    Si contadorImpares > 0 Entonces
        Escribir "La media de los números impares es: ", sumaImpares / contadorImpares
    Sino
        Escribir "No se ingresaron números impares."
    Fin Si
Fin Proceso
	