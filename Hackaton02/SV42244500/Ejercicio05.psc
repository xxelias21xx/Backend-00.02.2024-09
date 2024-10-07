//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el
//total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato esde $80.
Proceso Ejercicio05
	
	Definir precio, cantidadZapatos Como Entero
	Definir totalPagar, totalOriginal Como Real
	precio = 80
	Escribir "Ingresar la cantidad de zapatos comprados"
	Leer cantidadZapatos
	
	totalOriginal = ( cantidadZapatos * precio )
	totalPagar = totalOriginal - descuento
	
	si cantidadZapatos >= 10 y cantidadZapatos < 20 Entonces
		totalOriginal = ( cantidadZapatos * precio )
		descuento = totalOriginal * 0.1
		totalPagar = totalOriginal - descuento
		
	SiNo
		si cantidadZapatos >= 20 y cantidadZapatos < 30 Entonces
			totalOriginal = ( cantidadZapatos * precio )
			descuento = totalOriginal * 0.2
			totalPagar = totalOriginal - descuento
		
	SiNo
		si cantidadZapatos >= 30 Entonces
			totalOriginal = ( cantidadZapatos * precio )
			descuento = totalOriginal * 0.4
			totalPagar = totalOriginal - descuento
			
			FinSi
		
		FinSi
		
	FinSi
	
	Escribir "Cantidad comprada: ", cantidadZapatos, " / Total Original: ", totalOriginal
	Escribir "Descuento: " , descuento, " / Total a Pagar: ", totalPagar
	
FinProceso
