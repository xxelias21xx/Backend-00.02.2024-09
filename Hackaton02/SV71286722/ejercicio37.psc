Proceso MCD_Euclides
    Definir a, b, temporal Como Entero
	
    // Leer los dos números
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
	
    Mientras b <> 0 Hacer
        temporal <- b
        b <- a % b
        a <- temporal
    Fin Mientras
	
    // Mostrar el M.C.D.
    Escribir "El M.C.D. de los números es: ", a
Fin Proceso
