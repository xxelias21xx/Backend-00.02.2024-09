Proceso E7
	//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento
    //por compra a sus clientes con membresía dependiendo de su tipo, sólo existen
    //tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
	
		Definir tipoMembresia Como Caracter
		Definir totalCompra Como Real
		Definir descuento Como Real
		Definir descuento1 Como Real
		Definir precioFinal Como Real
				
		Escribir "Ingrese el total de la compra:"
		Leer totalCompra
		
		Escribir "Ingrese el tipo de membresía (A, B, C):"
		Leer tipoMembresia
				
		Segun tipoMembresia Hacer
			"A":
				descuento <- totalCompra * 0.20 
			"B":
				descuento <- totalCompra * 0.15 
			"C":
				descuento <- totalCompra * 0.10 
			De Otro Modo:
				Escribir "Tipo de membresía no válido."
				descuento <- 0
		Fin Segun
		
		precioFinal <- totalCompra - descuento
		
		Escribir "El total de la compra es: $", totalCompra
		Escribir "Descuento aplicado: $", descuento
		Escribir "El precio final a pagar es: $", precioFinal
FinProceso	
