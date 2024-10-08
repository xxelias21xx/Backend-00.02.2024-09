//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso MCD
    Definir a, b, residuo Como Entero
	
    Escribir "Ingrese primer numero: "
    Leer a
    Escribir "Ingrese segundo numero: "
    Leer b
	
    residuo <- 1
	
    Si a > b Entonces  
        Mientras residuo <> 0 Hacer
            residuo <- a MOD b
            a <- b
            b <- residuo
        Fin Mientras
        Escribir "El maximo comun divisor es:", a
    Sino
        Si b > a Entonces
            Mientras residuo <> 0 Hacer
                residuo <- b MOD a
                b <- a
                a <- residuo
            Fin Mientras
            Escribir "El maximo comun divisor es:", b
        Sino
            Escribir "El maximo comun divisor es:", a
        Fin Si
    Fin Si
Fin Proceso
