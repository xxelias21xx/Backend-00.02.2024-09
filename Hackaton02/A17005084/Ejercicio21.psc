//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso FactorialNumero
	Definir  FActTotal Como Entero
    Escribir "Ingrese un número: "
    Leer NumIngre

    Si NumIngre < 0 Entonces
        Escribir "El número debe ser no negativo."
		
	SiNo		
		FActTotal = 1		
		Para i Desde 1 Hasta NumIngre Hacer
			FActTotal = FActTotal * i
		FinPara		
		Escribir "El factorial de ", NumIngre, " es: ", FActTotal
	FinSi

FinProceso
