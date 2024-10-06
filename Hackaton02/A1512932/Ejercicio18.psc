Algoritmo Ejercicio18
// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
	porcenGanancia = 0.0825
	Escribir "Ingrese las unidades a comprar"
	Leer unidadesCd
	
	precio1=10
	precio2=8
	precio3=7
	precio4=6
	
	si unidadesCd <= 9 Entonces
		total = unidadesCd * precio1
		ganancia = otal * porcenGanancia 
	sino
		si unidadesCd >= 10  y unidadesCd <= 99 Entonces
			total = unidadesCd*precio2
			ganancia = total * porcenGanancia 
		SiNo
			si unidadesCd >= 100  y unidadesCd <= 499 Entonces
				total = unidadesCd*precio3
				ganancia = total * porcenGanancia
			SiNo
				si unidadesCd >= 500 Entonces
					total = unidadesCd*precio4
					ganancia = total * porcenGanancia
				Finsi		
			Finsi
		Finsi			
	FinSi
	
	Escribir "El total a pagar es :s/" total " y la ganancia del vendedor :s/" ganancia
FinAlgoritmo
