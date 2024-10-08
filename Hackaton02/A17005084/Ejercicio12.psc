//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso DefiDosNumeMayor
	
	Definir NroMayor Como Entero
	
	Escribir "Ingresar primer número: "
	leer NumPrime
	
	Escribir "Ingresar segundo número: "
	leer NumSegun
	
	NroMayor=NumPrime
	
	Si NumSegun>NroMayor Entonces
		NroMayor=NumSegun
	FinSi
	
	Escribir  "El numero mayor es: ", NroMayor
	
FinProceso
