//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con 
//membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
Proceso DescuentoHeladoXMenbresiaCliente
	Definir TotDesc,TotPagar Como Real
	Definir Est Como Caracter
	
	Escribir  "Ingrese Precio de Helado: "
	Leer  PrecHelado	
	Escribir  "Ingrese cantidad de venta: "
	Leer  CantHelado	
	Escribir  "Tipo de membresia de cliente"
	Leer  TipMembre
	TipMembre=Mayusculas(TipMembre)

	Est="A"
	TotDesc=0
	Segun TipMembre Hacer
		"A":
			TotDesc=(PrecHelado*CantHelado)*0.10
		"B":
			TotDesc=(PrecHelado*CantHelado)*0.15
		"C":
			TotDesc=(PrecHelado*CantHelado)*0.20
		De Otro Modo:
			Est="C"
	Fin Segun
	
	Si Est=="C" Entonces
		Escribir "Tipo de membresia incorrecto"
	SiNo
		TotPagar=(PrecHelado*CantHelado)-TotDesc
		Escribir "Total a pagar del cliente: ", TotPagar 
	Fin Si
FinProceso
