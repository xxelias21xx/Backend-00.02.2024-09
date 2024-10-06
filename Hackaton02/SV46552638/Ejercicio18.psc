Proceso Ejercicio18
	//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//				
//				$10. Si se compran unidades separadas hasta 9.
//					
//					$8. Si se compran entre 10 unidades hasta 99.
//						
//						$7. Entre 100 y 499 unidades.
//						
//						$6. Para mas de 500 unidades.
//							
//							La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender 
//	   						calcule el precio total para el cliente y la ganancia para el vendedor.
	
	Escribir "Ingrese la candidad de CDS a pagar: "
	Leer cantidad
	total = 0
	Si cantidad >= 500 Entonces
		total = cantidad *6
	SiNo
		Si cantidad >99 Entonces
			total = cantidad *7
		SiNo
			Si cantidad >9 Entonces
				total = cantidad *8
			SiNo
				total = cantidad *10
			Fin Si
		Fin Si
	Fin Si
	comision = total * 0.0825
	
	Escribir "Total a pagar: ", total
	Escribir "comision por venta: ", comision
	
FinProceso
