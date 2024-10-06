Proceso VentaCDs
    Definir cantidad Como Entero
    Definir precioPorCD, precioTotal, ganancia Como Real
	
    // Solicitar al usuario la cantidad de CDs a vender
    Escribir "Ingrese la cantidad de CDs a vender: "
    Leer cantidad
	
    // Determinar el precio por CD según la cantidad
    Si cantidad < 10 Entonces
        precioPorCD <- 10
    Sino
        Si cantidad < 100 Entonces
            precioPorCD <- 8
        Sino
            Si cantidad < 500 Entonces
                precioPorCD <- 7
            Sino
                precioPorCD <- 6 // Para más de 500 unidades
            FinSi
        FinSi
    FinSi
	
    // Calcular el precio total y la ganancia para el vendedor (8.25%)
    precioTotal <- cantidad * precioPorCD
    ganancia <- precioTotal * 0.0825
	
    // Mostrar resultados
    Escribir "Precio total para el cliente: $", precioTotal
    Escribir "Ganancia para el vendedor: $", ganancia
FinProceso
