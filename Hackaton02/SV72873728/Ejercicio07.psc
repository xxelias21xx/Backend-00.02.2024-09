Proceso Ejercicio07
	
	Definir Cantidad Como Entero
	Definir Precio, Descuento, PrecioFin Como Real
	Definir tipo Como Caracter
	
	Escribir "Ingrese precio del helado"
	Leer Precio
	Escribir "Ingrese cantidad de helados"
	Leer Cantidad
	Escribir "Ingrese Membresía"
	Leer tipo
	
	Si tipo = "A" o tipo = "a" Entonces
		Descuento = 0.1
	FinSi
	
	Si tipo = "B" o tipo = "b" Entonces
		Descuento = 0.15
	FinSi
	
	Si tipo = "C" o tipo = "c" Entonces
		Descuento = 0.2
	FinSi
	
	Si tipo <> "A" y tipo <> "B" y tipo <> "C" y tipo <> "a" y tipo <> "b" y tipo <> "c" Entonces
		Escribir "Sin membresía"
		Descuento = 0
	FinSi
		
	PrecioFin = Cantidad * precio * (1 - Descuento)
	
	Escribir "El precio por helado es: ", precio * (1 - Descuento)
	Escribir "El descuento dado es de: ", Descuento * 100, "% por helado"
	Escribir "El monto total a pagar es: ", PrecioFin
		
FinProceso
