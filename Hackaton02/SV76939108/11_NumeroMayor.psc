Algoritmo NumeroMayor
	Escribir "Ingrese 3 números: "
	Leer Num1, Num2, Num3
	Si Num1>=Num2 y Num1>=Num3 Entonces
		Escribir "El número mayor es ", Num1
	SiNo
		Si Num2>=Num1 y Num2>=Num3 Entonces
			Escribir "El número mayor es ", Num2
		SiNo
			Escribir "El número mayor es ", Num3
		FinSi
	FinSi
FinAlgoritmo
