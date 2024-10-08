// 5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene
// una promoción de descuento para vender al mayor, esta dependerá del 
// número de zapatos que se compren. Si son más de diez, se les dará un
// 10% de descuento sobre el total de la compra; si el número de zapatos
//es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
// y si son más treinta zapatos se otorgará un 40% de descuento.
// El precio de cada zapato es de $80.

Proceso Ejercicio5
	Definir numZapatos, precioZapato Como Entero
	Definir descuento, total Como Real
	
	precioZapato = 80
	
	Escribir "Ingrese la cantidad de zapatos a comprar:"
	Leer numZapatos
	
	Si numZapatos > 10 Entonces
		descuento = precioZapato * 0.1 * numZapatos
		si (numZapatos > 20) y (numZapatos <= 30) Entonces
			descuento = precioZapato * 0.2 * numZapatos
		FinSi
		si numZapatos > 30 Entonces
			descuento = precioZapato * 0.4 * numZapatos
		FinSi
	FinSi
	
	Total = (precioZapato * numZapatos) - descuento
	
	Escribir "Si se compran ", numZapatos, " zapatos, el descuento por zapato será de $", descuento, ","
	Escribir "Por lo tanto, el precio total será de $", Total, "."
FinProceso
