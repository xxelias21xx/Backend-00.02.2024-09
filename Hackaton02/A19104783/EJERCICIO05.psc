Proceso sin_titulo
	Definir cantidad, precioUnitario, total, descuento, totalPagar Como Real
	
    // Inicializar el precio unitario
    precioUnitario <- 80
	
    // Solicitar la cantidad de zapatos
    Escribir "Ingrese la cantidad de zapatos a comprar: "
    Leer cantidad
	
    // Calcular el total de la compra sin descuento
    total <- cantidad * precioUnitario
	
    // Aplicar el descuento según la cantidad
    Si cantidad > 10 Entonces
        Si cantidad > 20 Y cantidad < 30 Entonces
            descuento <- total * 0.2  // 20% de descuento
        SiNo
            Si cantidad >= 30 Entonces
                descuento <- total * 0.4  // 40% de descuento
            SiNo
                descuento <- total * 0.1  // 10% de descuento
            FinSi
        FinSi
    SiNo
        descuento <- 0  // Sin descuento
    FinSi
	

	
    // Calcular el total a pagar
    totalPagar <- total - descuento
	
    // Mostrar los resultados
    Escribir "Total sin descuento: $", total
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalPagar
	
FinProceso
