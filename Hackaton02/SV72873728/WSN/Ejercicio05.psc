Algoritmo  Ejercicio05
	//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción
	//de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
	//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
	//	si el número de zapatos es mayor de veinte pero menor de treinta, 
	//se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de 
	//descuento. El precio de cada zapato es de $80.
	
	definir cantidad Como Entero
	Definir  precio como real
	definir total, totalOriginal, descuento Como Real
	precio = 80
	
	Escribir  "Cantidad de zapatos : "
	Leer  cantidad
	totalOriginal = cantidad*precio
	total = cantidad*precio
	
	si cantidad >= 10 y cantidad < 20 Entonces
		totalOriginal = (cantidad * precio)
		descuento = totalOriginal * 0.01
		total = totalOriginal-descuento
		
	sino 
		si cantidad >= 20 y cantidad < 30 Entonces
			totalOriginal = (cantidad * precio)
			descuento = totalOriginal * 0.02
			total = totalOriginal-descuento
			finsi
	FinSi
	
	
	Escribir "Cantidad: " cantidad
	Escribir "Precio: " precio
	Escribir  "Descuento: " descuento
	Escribir  "---------------------------"
	Escribir "Total a pagar: " total 
	Escribir  "---------------------------"
	
	
	
	
	

FinAlgoritmo

