Proceso Ejercicio7
	//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
	//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//	Tipo A 10% de descuento
	//	Tipo B 15% de descuento
	//	Tipo C 20% de descuento
	
	descuentoA = 0.1
	descuentoB = 0.15
	descuentoC = 0.2
	
	Escribir "Selecciones tipo de Membresia: "
	Escribir "1 para Membresia de tipo A"
	Escribir "2 para Membresia de tipo B"
	Escribir "3 para Membresia de tipo C"
	Escribir "4 Sin Membresia"
	Leer tipo
	Escribir "Ingrese monto a pagar: "
	Leer monto
	
	Segun  tipo Hacer
		1:
			monto = monto*(1-descuentoA)
		2:
			monto = monto*(1-descuentoB)
		3:
			monto = monto*(1-descuentoC)
		4:
			monto = monto
		De Otro Modo:
			Escribir "Opcion Incorrecta"
	Fin Segun
	
	Escribir "Total a Pagar: ",monto
FinProceso

