Algoritmo DescuentoZapatos
	Definir NumZapa, Precio Como Entero
	Escribir "Ingrese el número de zapatos: "
	Leer NumZapa
	Precio<-80
	Si NumZapa>=10 y NumZapa<20 Entonces
		Total1<-NumZapa*Precio
		Descuento1<-10/100
		TotalOfer1<-Total1-(Total1*Descuento1)
		Escribir "El precio total aplicando la oferta es: $",TotalOfer1
	SiNo
		Si NumZapa>=20 y NumZapa<30 Entonces
			Total2<-NumZapa*Precio
			Descuento2<-20/100
			TotalOfer2<-Total2-(Total2*Descuento2)
			Escribir "El precio total aplicando la oferta es: $",TotalOfer2
		SiNo
			Si NumZapa>=30 Entonces
				Total3<-NumZapa*Precio
				Descuento3<-40/100
				TotalOfer3<-Total3-(Total3*Descuento3)
				Escribir "El precio total aplicando la oferta es: $", TotalOfer3
			SiNo
				Escribir "No aplica descuento"
			FinSi
		FinSi
	FinSi
FinAlgoritmo
