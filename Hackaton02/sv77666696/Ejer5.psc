Algoritmo DescuentoZapatos
    Definir cantidadZapatos, precioPorZapato, totalCompra, descuento Como Real
    precioPorZapato <- 80
	
    Escribir "Introduce la cantidad de zapatos que deseas comprar:"
    Leer cantidadZapatos
	
    totalCompra <- cantidadZapatos * precioPorZapato
	
    Si cantidadZapatos > 30 Entonces
        descuento <- totalCompra * 0.40
    Sino
        Si cantidadZapatos > 20 Entonces
            descuento <- totalCompra * 0.20
        Sino
            Si cantidadZapatos > 10 Entonces
                descuento <- totalCompra * 0.10
            Sino
                descuento <- 0
            FinSi
        FinSi
    FinSi
	
    totalCompra <- totalCompra - descuento
	
    Escribir "El total a pagar es: $", totalCompra
FinAlgoritmo
