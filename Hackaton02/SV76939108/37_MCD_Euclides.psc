Algoritmo MCD_Euclides
	Definir num1, num2, temp Como Entero
	Escribir "Ingrese el primer número: "
	Leer num1
	Escribir "Ingrese el segundo número: "
	Leer num2
	Si num1<0 Entonces
		num1<--num1
	FinSi
	Si num2<0 Entonces
		num2<--num2
	FinSi
	Mientras num2<>0 Hacer
		temp<-num2
		num2<-num1%num2
		num1<-temp
	FinMientras
	Escribir "El M.C.D es: ",num1
FinAlgoritmo
