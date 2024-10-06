Proceso OrdenarTresNumeros
    Definir num1, num2, num3, numMayor, numMedio, numMenor Como Entero
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
    Escribir "Ingrese el tercer número: "
    Leer num3
	
    // Ordenar los números usando condicionales
    Si num1 > num2 Y num1 > num3 Entonces
		numMayor <- num1
		Si num2 > num3 Entonces
			numMedio <- num2
			numMenor <- num3
		SiNo
			numMedio <- num3
			numMenor <- num2
		FinSi
	SiNo
		Si (num1 > num2 Y num1 < num3) O (num1 < num2 Y num1 > num3) Entonces
			numMedio <- num1
			Si num2 > num3 Entonces
				numMayor <- num2
				numMenor <- num3
			SiNo
				numMayor <- num3
				numMenor <- num2
			FinSi
		SiNo
			numMenor <- num1
			Si num2 > num3 Entonces
				numMayor <- num2
				numMedio <- num3
			SiNo
				numMayor <- num3
				numMedio <- num2
			FinSi
		FinSi
	FinSi
	
	Escribir "Ordenado de menor a mayor: ", numMenor, ", ", numMedio, ", ", numMayor, "."
FinProceso
