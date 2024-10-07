//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con
//membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
//Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
Proceso Ejercicio07
	
	Definir precioHelado, descuento, precioFinal Como Real
	Definir membresia Como Caracter
	
	Escribir "Escribir precio del helado"
	Leer precioHelado
	Escribir "Escriba el tipo de membresia A, B o C: "
	Leer membresia
	membresia = Mayusculas(membresia)
	
	Segun membresia Hacer
		"A":
			descuento = precioHelado * 0.1
		"B":
			descuento = precioHelado * 0.15
		"C":
			descuento = precioHelado * 0.2
		De Otro Modo:
			Escribir "Por favor ingresar un tipo de membresia valida, A, B o C"
			descuento = 0
			membresia = X
	FinSegun
	
	precioFinal = precioHelado - descuento
	
	Escribir "El precio original del helado es: ", precioHelado, " / El tipo de membresia es: ", membresia
	Escribir "Descuento: " , descuento, " / Total a Pagar: ", precioFinal
	
FinProceso
