Proceso CalcularDescuentoZapatos
    Definir cantidad_zapatos Como Entero
    Definir precio_por_zapato, total_compra, descuento, total_con_descuento Como Real
	
    // Precio fijo por zapato
    precio_por_zapato <- 80
	
    // Solicitar al usuario la cantidad de zapatos comprados
    Escribir "Ingrese la cantidad de zapatos que desea comprar: "
    Leer cantidad_zapatos
	
    // Calcular el total sin descuento
    total_compra <- cantidad_zapatos * precio_por_zapato
	
    // Determinar el descuento con estructuras condicionales
    Si cantidad_zapatos > 30 Entonces
        descuento <- 0.40
	Sino
		Si cantidad_zapatos > 20 Entonces
			descuento <- 0.20
		Sino
			Si cantidad_zapatos > 10 Entonces
			descuento <- 0.10
			Sino
				descuento <- 0
			FinSi
		FinSi
    FinSi
	
    // Calcular el total con descuento
    total_con_descuento <- total_compra - (total_compra * descuento)
	
    // Mostrar el resultado
    Escribir "El total de la compra sin descuento es: $", total_compra
    Escribir "El descuento aplicado es: ", descuento * 100, "%"
    Escribir "El total a pagar con descuento es: $", total_con_descuento
FinProceso

