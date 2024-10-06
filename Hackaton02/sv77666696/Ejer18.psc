Algoritmo VentaDeCDs
	
	Definir cantidad_CDs, precio_unitario, precio_total, ganancia_vendedor Como Real

	Escribir "Ingrese la cantidad de CDs a comprar: "
	Leer cantidad_CDs

	Si cantidad_CDs <= 9 Entonces
		precio_unitario <- 10
	SiNo
		Si cantidad_CDs >= 10 Y cantidad_CDs <= 99 Entonces
			precio_unitario <- 8
		SiNo
			Si cantidad_CDs >= 100 Y cantidad_CDs <= 499 Entonces
				precio_unitario <- 7
			SiNo
				Si cantidad_CDs >= 500 Entonces
					precio_unitario <- 6
				FinSi
			FinSi
		FinSi
	FinSi
	

	precio_total <- precio_unitario * cantidad_CDs
	
	ganancia_vendedor <- precio_total * 0.0825
	
	Escribir "El precio total para el cliente es: $", precio_total
	Escribir "La ganancia para el vendedor es: $", ganancia_vendedor
FinAlgoritmo
