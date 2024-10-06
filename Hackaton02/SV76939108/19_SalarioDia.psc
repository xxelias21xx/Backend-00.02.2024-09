Algoritmo SalarioDia
	Definir ID1, ID2, CantD Como Entero
	Escribir "Ingrese dos números que identifica al empleado (Cajero: 1-2,Servidor: 3-4, Preparador: 5-6, Mantenimiento: 7-8): "
	Leer ID1, ID2
	Escribir "Cantidad de días que trabajó: "
	Leer CantD
	Pago<-Salario*CantD
	SalarioCaj<-56
	SalarioSer<-64
	SalarioPre<-80
	SalarioMan<-48
	Si CantD>=0 y CantD<=7 Entonces
		Si ID1=1 y ID2=2 Entonces
			PagoCaj<-SalarioCaj*CantD
			Escribir "La cantidad de pago es $",PagoCaj
		SiNo
			Si ID1=3 y ID2=4 Entonces
				PagoSer<-SalarioSer*CantD
				Escribir "La cantidad de pago es $",PagoSer
			SiNo
				Si ID1=5 y ID=6 Entonces
					PagoPre<-SalarioPre*CantD
					Escribir "La cantidad de pago es $",PagoPre
				SiNo
					Si ID1=7 y ID2=8 Entonces
						PagoMan<-SalarioMan*CantD
						Escribir "La cantidad de pago es $",PagoMan
					SiNo
						Escribir "ID de empleado incorrecto."
					FinSi
				FinSi
			FinSi
		FinSi
	SiNo
		Escribir "Cantidad de días incorrecta"
	FinSi
FinAlgoritmo
