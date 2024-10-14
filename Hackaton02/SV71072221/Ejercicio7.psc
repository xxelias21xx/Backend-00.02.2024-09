// 7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento
// por compra a sus clientes con membresía dependiendo de su tipo, sólo existen 
// tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
Proceso Ejercicio7
	Definir membresia Como Caracter
	Escribir "Ingrese el tipo de membresia que tiene el cliente"
	leer membresia
	membresia = Minusculas(membresia)
	Segun membresia Hacer
		'a':
			Escribir  "La membresia ", A, " corresponde a un 10% de descuento en compras"
		'b':
			Escribir  "La membresia ", B, " corresponde a un 15% de descuento en compras"
		'c':
			Escribir  "La membresia ", C, " corresponde a un 20% de descuento en compras"
	Fin Segun
FinProceso
