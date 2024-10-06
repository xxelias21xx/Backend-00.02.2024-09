Algoritmo Ejercicio07
	
	//Hacer un algoritmo en Pseint para una tienda de helado que da un 
//descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//			Tipo A 10% de descuento
		//		Tipo B 15% de descuento
			//	Tipo C 20% de descuento
    Definir tipo_membresia Como Caracter
    Definir total_compra, total_con_descuento, descuento Como Real
	

    Escribir "Ingrese el total de la compra: "
    Leer total_compra
    Escribir "Ingrese el tipo de membresía (A, B o C): "
    Leer tipo_membresia
	
    descuento = 0
	
    Segun tipo_membresia Hacer
        Caso "A":
            descuento = 0.10
        Caso "B":
            descuento = 0.15
        Caso "C":
            descuento = 0.20
        De Otro Modo:
            Escribir "Tipo de membresía inválido, no se aplicará descuento."
    FinSegun
	
    total_con_descuento = total_compra - (total_compra * descuento)
	
    Escribir "El total con descuento es: $", total_con_descuento
FinAlgoritmo
