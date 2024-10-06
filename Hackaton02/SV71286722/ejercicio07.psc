Proceso CalcularDescuentoHelados
    Definir total_compra, descuento, total_con_descuento Como Real
    Definir tipo_membresia Como Caracter
	
    // Solicitar al usuario el total de la compra
    Escribir "Ingrese el total de la compra: "
    Leer total_compra
	
    // Solicitar al usuario el tipo de membresía
    Escribir "Ingrese el tipo de membresía (A, B, C): "
    Leer tipo_membresia
	
	tipo_membresia <- Mayusculas(tipo_membresia)
	
    // Determinar el descuento basado en el tipo de membresía
    Segun tipo_membresia Hacer
        Caso 'A':
            descuento <- 0.10 // 10% de descuento
        Caso 'B':
            descuento <- 0.15 // 15% de descuento
        Caso 'C':
            descuento <- 0.20 // 20% de descuento
        De Otro Modo:
            Escribir "Tipo de membresía no válido. No se aplicará descuento."
    Fin Segun
	
    // Calcular el total con descuento
    total_con_descuento <- total_compra - (total_compra * descuento)
	
    // Mostrar el total a pagar
    Escribir "El total a pagar después del descuento es: $", total_con_descuento
Fin Proceso
