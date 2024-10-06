Proceso ejercicio26
	//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Definir dividendo, divisor, cociente, resto Como Entero
	
    // Solicitar los números al usuario
    Escribir "Ingrese el dividendo: "
    Leer dividendo
    Escribir "Ingrese el divisor: "
    Leer divisor
	
    // Inicializar cociente y resto
    cociente <- 0
    resto <- dividendo
	
    // Realizar las restas sucesivas hasta que el resto sea menor que el divisor
    Mientras resto >= divisor Hacer
        resto <- resto - divisor
        cociente <- cociente + 1
    FinMientras
	
    // Mostrar los resultados
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto
FinProceso
