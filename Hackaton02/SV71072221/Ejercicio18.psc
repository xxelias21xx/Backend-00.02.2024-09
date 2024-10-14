// 18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta
// y distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
// (supongamos un único producto de una única marca) por cantidad. Los precios son:
//      $10. Si se compran unidades separadas hasta 9.
//      $8. Si se compran entre 10 unidades hasta 99.
//      $7. Entre 100 y 499 unidades.
//      $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint 
//que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia 
//para el vendedor.
Proceso Ejercicio18
	Definir cantCD, precio, ingreso Como Entero
	Definir utilidad Como Real
	Escribir "Ingrese la cantidad de CDs a comprar:"
	Leer cantCD
	
	Si cantCD <= 9 Entonces
		precio = 10
	SiNo
		Si cantCD <= 99 Entonces
			precio = 8
		SiNo
			Si cantCD <= 499 Entonces
				precio = 7
			SiNo
				precio = 6
			FinSi
		FinSi
	FinSi
	ingreso = precio * cantCD
	utilidad = ingreso * 0.0825
	Escribir "Para una cantidad de venta de ", cantCD, " CDs, el precio de venta es de $", precio, ", y la ganancia del vendedor es de $", utilidad, "."
FinProceso
