Algoritmo SueldoSemanal
	Definir CantHora, Pago, Pago2 Como Entero
	Definir TotalPago1, TotalPago2, Total Como Entero
	Escribir "Ingrese la cantidad de horas de trabajo: "
	Leer CantHora
	Si CantHora>0 y CantHora<40 Entonces
		Pago<-20
		TotalPago1<-CantHora*Pago
		Escribir "El sueldo semanal es: $", TotalPago1
	SiNo
		Si CantHora>=40 y CantHora<168 Entonces
			Pago2<-25
			TotalPago2<-CantHora*Pago2
			Total<-TotalPago1+TotalPago2
			Escribir "El sueldo semanal es: $",Total
		FinSi
	FinSi
FinAlgoritmo
