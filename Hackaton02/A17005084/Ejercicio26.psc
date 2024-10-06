//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso CocientResto	
    Escribir "Ingrese el dividendo (número a dividir): "
    Leer NroDividendo
    Escribir "Ingrese el divisor (número por el que se divide): "
    Leer NroDivisor
	
    Si NroDivisor = 0 Entonces
        Escribir "El divisor no puede ser cero."
	SiNo
		Definir NroCocien, NroResto Como Entero

		NroCocien = 0
		NroResto = NroDividendo

		Mientras NroResto >= NroDivisor Hacer
			NroResto = NroResto - NroDivisor
			NroCocien = NroCocien + 1
		Fin Mientras

		Escribir "El cociente es: ", NroCocien
		Escribir "El Resto es: ", NroResto
	FinSi


Fin Proceso
