Proceso Ejercicio5
	//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
	//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre 
	//	el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% 
	//de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
	precio = 80.0
	porcentaje1 = 0.1
	porcentaje2 = 0.2
	porcentaje3 = 0.3
	descuento= 0.0
	total=0.0
	cantidad=0
	Escribir "ingrese la cantidad de zapatos a comprar: "
	Leer cantidad
	total = (cantidad * precio)
	Si 30 < cantidad  Entonces
		descuento= (total)*porcentaje3
	SiNo
		Si 20 < cantidad  Entonces
			descuento= (total)*porcentaje2
		SiNo
			Si 10 < cantidad  Entonces
				descuento= (total)*porcentaje1
			SiNo
				descuento=0
			Fin Si
			descuento= (total)*porcentaje3
		Fin Si
	Fin Si
	
	Escribir "El total es: ",total
	Escribir "Su descuento es: ", descuento
	Escribir "Monto a pagar:", total-descuento
FinProceso
