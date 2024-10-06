//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes 
//con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos 
//son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Algoritmo CalcularDescuentoHelados
    Definir tipo_membresia Como Caracter
    Definir total_compra, descuento, total_pagar Como Real
	
    Escribir "Ingrese el total de su compra:"
    Leer total_compra
	
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipo_membresia
	
    // Inicializar el descuento
    descuento <- 0
	
    // Determinar el descuento según el tipo de membresía
    Segun tipo_membresia Hacer
        "A":
            descuento <- total_compra * 0.10
        "B":
            descuento <- total_compra * 0.15
        "C":
            descuento <- total_compra * 0.20
        De Otro Modo:
            Escribir "Tipo de membresía no válido."
            descuento <- 0
    Fin Segun
	
    // Calcular el total a pagar
    total_pagar <- total_compra - descuento
	
    // Mostrar resultados
    Escribir "El total a pagar es: $", total_pagar
    Escribir "Descuento aplicado: $", descuento
FinAlgoritmo

