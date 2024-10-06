Proceso E18
	//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes.
	//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad.
    //Los precios son:	
	//$10. Si se compran unidades separadas hasta 9.
		
    //$8. Si se compran entre 10 unidades hasta 99.
			
	//$7. Entre 100 y 499 unidades.
			
    //$6. Para mas de 500 unidades.
				
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que
	//dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
		Definir cantidad Como Entero
		Definir precioUnitario, precioTotal, ganancia Como Real
		
		// Leer la cantidad de CDs
		Escribir "Ingresa la cantidad de CDs a vender:"
		Leer cantidad
		
		// Determinar el precio unitario
		Si cantidad < 1 Entonces
			Escribir "La cantidad debe ser al menos 1."
		Sino
			Si cantidad < 10 Entonces
				precioUnitario <- 10
			Sino
				Si cantidad < 100 Entonces
					precioUnitario <- 8
				Sino
					Si cantidad < 500 Entonces
						precioUnitario <- 7
					Sino
						precioUnitario <- 6
					Fin Si
				Fin Si
			Fin Si
			
			// Calcular el precio total
			precioTotal <- precioUnitario * cantidad
			
			// Calcular la ganancia para el vendedor
			ganancia <- precioTotal * 0.0825
			
			Escribir "El precio unitario para el cliente es: $", precioUnitario
			Escribir "El costo total para el cliente es: $", precioTotal
			Escribir "La ganancia para el vendedor es: $", ganancia
		Fin Si
	Fin Proceso
