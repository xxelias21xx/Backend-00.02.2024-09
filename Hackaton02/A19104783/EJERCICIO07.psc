Proceso EJERCICIO07
	//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes 
	//con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
	
	
	
	Definir   cantidadHelados, precioUnitario, total, descuento Como Real
	nombreCliente=""
	tipoMembresia=""
    // Inicializar el precio unitario del helado
    precioUnitario <- 3 // Ajusta este valor según el precio real del helado
	
    // Solicitar datos al cliente
    Escribir "Ingrese el nombre del cliente: "
    Leer nombreCliente
    Escribir "Ingrese el tipo de membresía (A, B o C): "
    Leer tipoMembresia
    Escribir "Ingrese la cantidad de helados: "
    Leer cantidadHelados
	
    // Calcular el total sin descuento
    total <- cantidadHelados * precioUnitario
	
    // Aplicar descuento según el tipo de membresía
    Segun tipoMembresia Hacer
        "A": descuento <- total * 0.1
        "B": descuento <- total * 0.15
        "C": descuento <- total * 0.2
        De Otro Modo:
            Escribir "Tipo de membresía inválido."
            totalPagar <- total
    FinSegun
	
    // Calcular el total a pagar
    totalPagar <- total - descuento
	
    // Mostrar resultados
    Escribir "Cliente:", nombreCliente
    Escribir "Total sin descuento: $", total
    Escribir "Descuento: $", descuento
    Escribir "Total a pagar: $", totalPagar
FinProceso
