Algoritmo OperacionesCuatroDigitos
	Definir num1, num2,num3,num4, numMayor Como Entero
	Escribir "Ingresar 4 números"
	Leer num1, num2, num3, num4
	Si num1>=0 y num2>=0 y num3>=0 y num4>=0 Entonces
		cantPar<- 0
		si num1 mod 2 = 0
			cantPar<-cantPar+1
		FinSi
		si num2 mod 2 = 0
			cantPar<-cantPar+1
		FinSi
		si num3 mod 2 = 0
			cantPar<-cantPar+1
		FinSi
		si num4 mod 2 = 0
			cantPar<-cantPar+1
		FinSi
		Si num1>num2 Entonces
			Si num1>num2 Entonces
				Si num1>num3 Entonces
					Si num1>num4 Entonces
						numMayor<-num1
					SiNo
						numMayor<-num4
					FinSi
				SiNo
					si num3>num4 Entonces
						numMayor<-num3
					SiNo
						numMayor<-num4
					FinSi
				FinSi
			SiNo
				si num2>num3 Entonces
					si num2>num4 Entonces
						numMayor <-num2
					SiNo
						numMayor<-num4
					FinSi
				SiNo
					si num3>num4 Entonces
						numMayor<-num3
					SiNo
						numMayor<-num4
					FinSi
				FinSi
			FinSi
		SiNo
			si num2>num3 Entonces
				si num2>num4 Entonces
					numMayor<-num2
				SiNo
					numMayor<-num4
				FinSi
			SiNo
				si num3>num4 Entonces
					numMayor <- num3
				SiNo
					numMayor <- num4
				FinSi
			FinSi
		FinSi
		Escribir "La cantidad de número pares es ",cantPar
		Escribir "El número mayor es ", numMayor
		si num3 mod 2 =0 Entonces
			Cuadrado<-num2^2
			Escribir "El cuadrado del segundo es ", Cuadrado
		FinSi
		si num1<num4 Entonces
			media<-(num1+num2+num3+num4)/4
			Escribir "La media de los 4 números es ", media
		FinSi
		si num2>num3 Entonces
			Si num3>=50 y num3<=700 Entonces
				suma<-num1+num2+num3+num4
				Escribir "El número mayor es ", numMayor
				Escribir "La suma de los 4 dígitos es ", suma
			FinSi
		FinSi
	sino
		Escribir "Los números no son positivos"
	FinSi
FinAlgoritmo
