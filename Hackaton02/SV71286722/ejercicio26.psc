Proceso CocienteYRestoPorRestasSucesivas
    Definir dividendo, divisor, cociente, resto Como Entero
	
    // Leer el dividendo y el divisor
    Escribir "Ingrese el dividendo (número entero positivo): "
    Leer dividendo
    Escribir "Ingrese el divisor (número entero positivo): "
    Leer divisor
	
    // Inicializar el cociente y el resto
    cociente <- 0
    resto <- dividendo
	
    // Verificar que el divisor sea diferente de cero
    Si divisor = 0 Entonces
        Escribir "Error: El divisor no puede ser cero."
    Sino
        // Calcular el cociente mediante restas sucesivas
        Mientras resto >= divisor Hacer
            resto <- resto - divisor
            cociente <- cociente + 1
        Fin Mientras
		
        // Mostrar el resultado
        Escribir "Cociente: ", cociente
        Escribir "Resto: ", resto
    Fin Si
Fin Proceso
