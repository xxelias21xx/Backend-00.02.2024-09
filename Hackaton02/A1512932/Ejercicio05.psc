Algoritmo Ejercicio05
	//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
	//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
	//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
	//El precio de cada zapato es de $80
	Definir cantZapato, precioTotal como entero
	precioZapato = 80
	Escribir "Estimado, Cuantos zapatos ha comprado para poder realizar su descuento por la compra"
	Leer cantZapato
	
	subTotal = (precioZapato*cantZapato)
	desc1 = subTotal*0.10
	desc2 = subTotal*0.20
	desc3 = subTotal*0.40
	

	si cantZapato >= 10 y cantZapato < 20
		precioTotal = subTotal-desc1
		
	SiNo
		si cantZapato >=20 y cantZapato <30
			precioTotal = subTotal-desc2
		SiNo
			si cantZapato >=30
				precioTotal = sobTotal-desc3
			FinSi
		Finsi	
	FinSi
	Si cantZapato < 10	
		precioTotal = subTotal
	
	FinSi

	Escribir "Estimado(a) el precio Total a pagar: S/" precioTotal ",Gracias por su compra"

FinAlgoritmo
