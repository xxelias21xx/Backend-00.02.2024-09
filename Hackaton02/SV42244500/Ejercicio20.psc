//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso Ejercicio20
	
	Definir suma, contPar, mayor Como Entero
    Definir cuadSeg, media Como Real
	Dimensionar num[4]
	
    Escribir "Ingrese el primer numero positivo: "
    Leer num[1]
    Escribir "Ingrese el segundo numero positivo: "
    Leer num[2]
    Escribir "Ingrese el tercer numero positivo: "
    Leer num[3]
    Escribir "Ingrese el cuarto numero positivo: "
    Leer num[4]

	suma = 0
	
    Para i desde 1 hasta 4 Hacer
		suma = suma + num[i]
		Si num[i] % 2 = 0 Entonces
			contPar = contPar + 1
		FinSi
	FinPara

	mayor = num[1]
	Si num[2] > num[1] Entonces
		mayor = num[2]
	FinSi
	Si num[3] > mayor Entonces
		mayor = num[3]
	FinSi
	Si num[4] > mayor Entonces
		mayor = num[4]
	FinSi

    Escribir "Cantidad de numeros pares: ", contPar
    Escribir "El mayor de todos los numeros es: ", mayor
	
	Si num[3] % 2 = 0 Entonces
		cuadSeg = num[2] ^ 2
		Escribir "El cuadrado del segundo es: ", cuadSeg
	FinSi

    Si num[1] < num[4] Entonces
        media = suma / 4
        Escribir "La media de los 4 numeros es: ", media
    Fin Si

    Si num[2] > num[3] Entonces
        Si num[3] >= 50 y num[3] <= 700 Entonces
            Escribir "La suma de los 4 numeros es: ", suma
        Fin Si
    Fin Si
	
FinProceso
