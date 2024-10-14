Proceso Ejercicio05
	
	Definir Precio, Cantidad Como Entero
	Definir Descuento, PrecioFin Como Real
	precio = 80
	
	Escribir "Ingrese cantidad de zapatos que desea comprar"
	Leer Cantidad
	
	Si Cantidad < 0 Entonces
		Escribir "Cantidad equivocada"
	SiNo
		Si Cantidad <= 10 Entonces
			Descuento = 0
		FinSi
		
		Si Cantidad > 10 y Cantidad <= 20 Entonces
			Descuento = 0.1
		FinSi
		
		Si Cantidad > 20 y Cantidad <= 30 Entonces
			Descuento = 0.2
		FinSi
		
		Si Cantidad > 30 Entonces
			Descuento = 0.4
		FinSi
		
		PrecioFin = Cantidad * precio * (1 - Descuento)
		
		Escribir "El precio por zapato es de: ", precio * (1 - Descuento)
		Escribir "El descuento dado es de: ", Descuento * 100, "% por zapato"
		Escribir "El monto total a pagar es: ", PrecioFin
		Escribir "Cantidad de zapatos comprados: ", Cantidad
		
	FinSi
	
FinProceso
