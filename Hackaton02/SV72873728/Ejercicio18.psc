Proceso Ejercicio18
	
	Escribir "Ingrese cantidad de CDs que desea comprar"
	Leer Cantidad
	
	Si Cantidad < 0 Entonces
		Escribir "Cantidad equivocada"
	SiNo
		Si Cantidad <= 9 Entonces
			precio = 10
		FinSi
		
		Si Cantidad > 9 y Cantidad <= 99 Entonces
			precio = 8
		FinSi
		
		Si Cantidad > 99 y Cantidad <= 499 Entonces
			precio = 7
		FinSi
		
		Si Cantidad > 499 Entonces
			precio = 6
		FinSi
		
		PrecioFin = Cantidad * precio
		Ganancia = PrecioFin * 0.0825
		
		Escribir "El monto total a pagar es: ", PrecioFin
		Escribir "Ganancia ", Ganancia
		
	FinSi
	
FinProceso
