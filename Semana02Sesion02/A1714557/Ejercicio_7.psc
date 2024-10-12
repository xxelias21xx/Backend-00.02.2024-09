//7. Hacer un algoritmo en Pseint para una tienda de helado que da 
//un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
//Los descuentos son los siguientes:

//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Proceso Heladeria
	Definir tipo Como Caracter
	Escribir "Ingresa el tipo de membresia del cliente:"
	Leer tipo
	tipo <- Minusculas(tipo)
	Segun tipo Hacer
		'a':
			Escribir "Le corresponde un 10% de descuento."
		'b':
			Escribir "Le corresponde un 15% de descuento."
		'c':
			Escribir "Le corresponde un 20% de descuento."
		De Otro Modo:
			Escribir "No es un tipo de membresia valida."
	FinSegun
	
FinProceso
