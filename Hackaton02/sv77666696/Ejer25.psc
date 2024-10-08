Algoritmo FactorialRepetir
	Definir num, factorial, contador Como Entero
	
	Escribir "Ingrese un número para calcular su factorial: "
	Leer num
	factorial <- 1
	contador <- num
	
	Si num >= 0 Entonces
		
		Repetir
			factorial <- factorial * contador
			contador <- contador - 1
		Hasta Que contador = 0
		Escribir "El factorial de ", num, " es: ", factorial
	SiNo
		Escribir "El factorial no está definido para números negativos."
	FinSi
FinAlgoritmo
