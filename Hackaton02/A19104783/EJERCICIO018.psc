Proceso ejercicio18
	//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
	//$10. Si se compran unidades separadas hasta 9.
	//$8. Si se compran entre 10 unidades hasta 99.
	//$7. Entre 100 y 499 unidades.
	//$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	Definir cantidad, precioUnitario, precioTotal, ganancia Como Real
	
    // Solicitar la cantidad a comprar
    Escribir "Ingrese la cantidad de CDs a comprar: "
    Leer cantidad
	
    // Calcular el precio unitario según la cantidad
    Si cantidad <= 9 Entonces
        precioUnitario <- 10
    SiNo
        Si cantidad <= 99 Entonces
            precioUnitario <- 8
        SiNo
            Si cantidad <= 499 Entonces
                precioUnitario <- 7
            SiNo
                precioUnitario <- 6
            FinSi
        FinSi
    FinSi
	
    // Calcular el precio total
    precioTotal <- cantidad * precioUnitario
	
    // Calcular la ganancia del vendedor
    ganancia <- precioTotal * 0.0825
	
    // Mostrar los resultados
    Escribir "El precio total de la compra es: $", precioTotal
    Escribir "La ganancia para el vendedor es: $", ganancia

		
FinProceso
