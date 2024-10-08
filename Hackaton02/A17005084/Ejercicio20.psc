//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso NumeroEnterosPositivos
	Escribir "Ingrese el primer número positivo: "
    Leer NumPrim
    Escribir "Ingrese el segundo número positivo: "
    Leer NumSegun
    Escribir "Ingrese el tercer número positivo: "
    Leer NumTerce
    Escribir "Ingrese el cuarto número positivo: "
    Leer NumCuart
	
	Definir VeriPosi Como Logico
	VeriPosi=Verdadero
	Si NumPrim<0 Entonces
		VeriPosi=Falso
	Fin Si
	Si NumSegun<0 Entonces
		VeriPosi=Falso
	Fin Si
	Si NumTerce<0 Entonces
		VeriPosi=Falso
	Fin Si
	Si NumCuart<0 Entonces
		VeriPosi=Falso
	Fin Si
	
	Si VeriPosi Entonces
		Definir NroPares,NumMay Como Entero
		NroPares=0
		
		Si NumPrim %2 = 0 Entonces
			NroPares=NroPares+1
		Fin Si
		Si NumSegun %2 = 0 Entonces
			NroPares=NroPares+1
		Fin Si
		Si NumTerce %2 = 0 Entonces
			NroPares=NroPares+1
		Fin Si
		Si NumCuart %2 = 0 Entonces
			NroPares=NroPares+1
		Fin Si
		NumMay=NumPrim
		
		Si NumMay<NumSegun Entonces
			NumMay=NumSegun
		FinSi
		Si NumMay<NumTerce Entonces
			NumMay=NumTerce
		FinSi
		Si NumMay<NumCuart Entonces
			NumMay=NumCuart
		FinSi
		
		
		Escribir "La cantidad de numeros pares es: ", NroPares
		Escribir "El número mayor es: ", NumMay
		
		Si NumTerce % 2 = 0 Entonces
			Definir  CuadSegun Como Real
			CuadSegun = NumSegun * NumSegun
			Escribir "El cuadrado del segundo número es: ", CuadSegun
		FinSi
		Si NumPrim<NumCuart Entonces
			Definir  MediNume Como Real
			MediNume=(NumPrim + NumSegun + NumTerce + NumCuart)/4
			Escribir  "La media de los 4 números es: " MediNume
		FinSi
		
		Si NumSegun > NumTerce Entonces
			Si NumTerce >= 50 Y NumTerce <= 700 Entonces
				Definir SumNumer Como Real
				SumNumer=(NumPrim + NumSegun + NumTerce + NumCuart)
				Escribir "La suma de los cuatro números es: ", SumNumer
			FinSi
		FinSi
		
	SiNo
		Escribir "Todos los números deben ser positivos"
	Fin Si
	
	
	
FinProceso
