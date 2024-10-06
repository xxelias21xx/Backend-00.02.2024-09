Proceso Ejericio14
	//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.
	num = -1
	contador =0
	
	//validando los valores dentro del rango de opciones
	Repetir
		Escribir "Ingrese un numero entero del 1 al 10"
		Leer num
	Hasta Que (num > 0 y num <11)
	//hallando la cantidad de divisores
	Para i=1 Hasta num Con Paso paso Hacer
		
		Si (num MOD i == 0) Entonces
			contador = contador +1
		Fin Si
		
		i=i+1
	Fin Para
	//Si la cantidad de divisores es mayor a 2 no es primo
	Escribir "contador ", contador
	Si  contador > 2 Entonces
		Escribir num " no es un munero primo"
	SiNo
		Escribir num " no un munero primo"
	Fin Si
FinProceso
