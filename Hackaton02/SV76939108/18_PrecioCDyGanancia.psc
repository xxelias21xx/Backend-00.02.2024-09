Algoritmo PrecioCDyGanancia
	Definir CantCD Como Entero
	Escribir "Ingrese la cantidad de CDs"
	Leer CantCD
	PorGan<-8.25/100
	Si CantCD>=0 y CantCD<=9 Entonces
		Precio<-10
		Total<-Precio*CantCD
		GanTotal<-Total*PorGan
		Escribir "El precio total a pagar es $", Total
		Escribir "La ganancia del vendedor es $", GanTotal
	SiNo
		Si CantCD>=10 y CantCD<=99 Entonces
			Precio<-8
			Total<-Precio*CantCD
			GanTotal<-Total*PorGan
			Escribir "El precio total a pagar es $", Total
			Escribir "La ganancia del vendedor es $", GanTotal
		SiNo
			Si CantCD>=100 y CantCD<=499 Entonces
				Precio<-7
				Total<-Precio*CantCD
				GanTotal<-Total*PorGan
				Escribir "El precio total a pagar es $", Total
				Escribir "La ganancia del vendedor es $", GanTotal
			SiNo
				Precio<-6
				Total<-Precio*CantCD
				GanTotal<-Total*PorGan
				Escribir "El precio total a pagar es $ ", Total
				Escribir "La ganancia del vendedor es $", GanTotal
			FinSi
		FinSi
	FinSi
FinAlgoritmo
