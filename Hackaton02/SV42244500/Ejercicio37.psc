//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso Ejercicio37
	
	Definir a, b, temporal Como Entero

    Escribir "Ingrese el primer numero:"
    Leer a
    Escribir "Ingrese el segundo numero:"
    Leer b
	
    Mientras b <> 0 Hacer
        temporal = b
        b = a % b
        a = temporal
    Fin Mientras

    Escribir "El M.C.D. de los numeros es: ", a
	
FinProceso
