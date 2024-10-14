//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
Proceso VentaDistribucionCD
	
	Definir PrecVta Como entero
	Definir TotVta,GanVend Como Real
	Escribir "Ingrese la cantidad a compra: "
	Leer CantVta
	
	Si CantVta<10 Entonces
		PrecVta=10
	Fin Si
	Si CantVta>=10 y CantVta<100 Entonces
		PrecVta=8
	Fin Si
	Si CantVta>=100 y CantVta<500 Entonces
		PrecVta=7
	Fin Si
	Si CantVta>=500 Entonces
		PrecVta=6
	Fin Si
	
	TotVta=CantVta*PrecVta
	GanVend=TotVta*0.0825
	Escribir  "El precio de venta es $", PrecVta
	Escribir  "El total de la venta es $", TotVta
	Escribir  "La ganancia del vendedor es $", GanVend
	
	
FinProceso
