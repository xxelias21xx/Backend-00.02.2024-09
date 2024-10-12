Proceso E26
   //Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Definir dividendo, divisor, cociente, resto Como Entero
	
    Escribir "Ingrese el dividendo:"
    Leer dividendo
    Escribir "Ingrese el divisor (debe ser mayor que cero):"
    Leer divisor
	
    Si divisor <= 0 Entonces
        Escribir "El divisor debe ser un número positivo."
    Sino
        cociente <- 0
        resto <- dividendo
		
        Mientras resto >= divisor Hacer
            resto <- resto - divisor
            cociente <- cociente + 1
        Fin Mientras
		
        Escribir "El cociente es: ", cociente
        Escribir "El resto es: ", resto
    Fin Si
Fin Proceso
