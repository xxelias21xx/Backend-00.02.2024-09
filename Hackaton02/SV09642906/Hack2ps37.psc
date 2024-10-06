Proceso E37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
    Definir a, b Como Entero
    Definir temp Como Entero
	
    Escribir "Ingrese el primer número (a): "
    Leer a
    Escribir "Ingrese el segundo número (b): "
    Leer b
	
    // Asegurarse de que a sea mayor que b
    Si b > a Entonces
        temp <- a
        a <- b
        b <- temp
    Fin Si
	
    // Aplicar el algoritmo de Euclides
    Mientras b <> 0 Hacer
        temp <- b
        b <- a Mod b
        a <- temp
    Fin Mientras
	
    Escribir "El M.C.D. es: ", a
Fin Proceso
