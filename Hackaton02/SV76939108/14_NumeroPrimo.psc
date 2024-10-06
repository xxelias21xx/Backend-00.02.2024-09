Algoritmo NumeroPrimo
	Definir num Como Entero
	Escribir "Ingrese un número del 1-10: "
	Leer num
	divisor <- 1
	cantDivisores <- 0
	Si num>=1 y num<=10 Entonces
		Mientras (divisor<=num) Hacer
			residuo <- num mod divisor
		    Si (residuo = 0) Entonces
				cantDivisores <- cantDivisores + 1
		    FinSi
		    divisor <- divisor + 1
	    FinMientras
	    Si (cantDivisores=2) Entonces
		    Escribir "El número ", num, " es primo"
	    SiNo
		   Escribir "El número ", num, " NO es primo"
		FinSi
   SiNo
	   Escribir "El número es incorrecto"
	FinSi
FinAlgoritmo
