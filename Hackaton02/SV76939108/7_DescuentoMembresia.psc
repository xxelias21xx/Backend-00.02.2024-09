Algoritmo DescuentoMembresia
	Definir TipoMem Como Caracter
	Definir Descuento, Descuento2, Descuento3 Como Entero
	Escribir "Ingrese tipo de membresía: "
	Leer TipoMem
	Si TipoMem='A' o TipoMem='B' o TipoMem='C' Entonces
		Si TipoMem='A' Entonces
			Descuento<-10
			Escribir "El descuento por tipo ", TipoMem, " es: ", Descuento, "%"
		SiNo
			Si TipoMem='B' Entonces
				Descuento2<-15
				Escribir "El descuento por tipo ", TipoMem, " es: ", Descuento2, "%"
			SiNo
				Descuento3<-20
				Escribir "El descuento por tipo ", TipoMem, " es: ", Descuento3, "%"
			FinSi
		FinSi
	SiNo
		Escribir "No existe tipo de membresía."
	FinSi
FinAlgoritmo
