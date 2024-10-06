//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y 
//distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
//(supongamos un único producto de una única marca) por cantidad.
//Los precios son:

//$10. Si se compran unidades separadas hasta 9.
	
//   $8. Si se compran entre 10 unidades hasta 99.
	
//	$7. Entre 100 y 499 unidades.
	
//	$6. Para mas de 500 unidades.
	
//	La ganancia para el vendedor es de 8,25 % de la venta. 
//Realizar un algoritmo en Pseint que dado un número de CDs a vender 
//calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Venta_CD
	Definir cantcd,precio,total Como Entero
	Definir ganancia Como Real
	
	Escribir "Ingrese la cantidad discos a vender:"
	Leer cantcd
	
	si cantcd<10 Entonces
		precio=10
		total=cantcd*precio
		ganancia=total*0.0825
	SiNo
		si cantcd>=10 y cantcd<100 Entonces
			precio=8
			total=cantcd*precio
			ganancia=total*0.0825
		SiNo
			si cantcd>=100 y cantcd<500 Entonces
				precio=7
				total=cantcd*precio
				ganancia=total*0.0825
			SiNo
				precio=6
				total=cantcd*precio
				ganancia=total*0.0825
			FinSi
		FinSi
	FinSi
	
	Escribir "El total de la venta es: ",total
	Escribir "La ganancia es de: ",ganancia		

	
FinProceso
