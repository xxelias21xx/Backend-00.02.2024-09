Algoritmo OrdenMenorAMayor
	Definir Num1, Num2, Num3 Como Entero
	Escribir "Ingrese tres números enteros: "
	Leer Num1, Num2, Num3
	Si Num1<Num2 y Num1<Num3 Entonces
		Si Num2<Num3 Entonces
			Escribir "El orden de menor a mayor: ", Num1,", " ,Num2, ", ",Num3
		SiNo
			Escribir "El orden de menor a mayor: ", Num1,", " ,Num3, ", ",Num2 
		FinSi
	SiNo
		Si Num2<Num1 y Num2<Num3 Entonces
			Si Num1<Num3 Entonces
				Escribir "El orden de menor a mayor: ", Num2,", " ,Num1, ", ",Num3
			SiNo
				Escribir "El orden de menor a mayor: ", Num2,", " ,Num3, ", ",Num1
			FinSi
		SiNo
			Si Num3<Num1 y Num3<Num2 Entonces
				Si Num1<Num2 Entonces
					Escribir "El orden de menor a mayor: ", Num3,", " ,Num1, ", ",Num1
				SiNo
					Escribir "El orden de menor a mayor: ", Num3,", " ,Num2, ", ",Num1
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
