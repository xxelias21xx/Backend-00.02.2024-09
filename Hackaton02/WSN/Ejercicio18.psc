//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes.
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//		$10. Si se compran unidades separadas hasta 9.
//		$8. Si se compran entre 10 unidades hasta 99.
//		$7. Entre 100 y 499 unidades.
//	$6. Para mas de 500 unidades.
//	La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Algoritmo Ejercicio18
	
	
	Definir cantidad, precio, total, ganancia Como Real
	
	Escribir "Escribe una cantidad a vender: "
	Leer cantidad
	
	si cantidad <= 9 Entonces
		precio = 10
	SiNo
		
		si cantidad >= 10 y cantidad <= 99 Entonces
			precio = 8
		SiNo
			si cantidad >= 100 y cantidad <= 499 Entonces
				precio = 7
			SiNo
				si cantidad >= 500  Entonces
					precio = 6
				FinSi
			finsi
		finsi
	FinSi
	
	total = cantidad * precio
	ganancia = total * 0.0825
	
	// Mostrar los resultados
	Escribir "El precio total es: $", total
	Escribir "La ganancia del vendedor es: $", ganancia
	
	
		
	
		
FinAlgoritmo


		