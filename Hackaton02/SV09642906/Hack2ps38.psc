Proceso E38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

	Definir num, suma Como Entero
    Definir i Como Entero
	
    Escribir "Ingrese un número: "
    Leer num
	
    suma <- 0
	
    Para i Desde 1 Hasta num / 2 Hacer
        Si num Mod i = 0 Entonces
            suma <- suma + i
        Fin Si
    Fin Para
	
    Si suma = num Entonces
        Escribir num, " es un número perfecto."
    Sino
        Escribir num, " no es un número perfecto."
    FinSi
Fin Proceso
