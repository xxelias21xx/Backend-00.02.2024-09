//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso TresNumeroMayor
	Definir NroMayor Como Entero
	
	Escribir "Ingresar primer número: "
	leer NumPrime
	
	Escribir "Ingresar segundo número: "
	leer NumSegun
	
	Escribir "Ingresar tercer número: "
	leer NumTerce
	
	NroMayor=NumPrime
	
	Si NumSegun>NroMayor Entonces
		NroMayor=NumSegun
	FinSi
	
	Si NumTerce>NroMayor Entonces
		NroMayor=NumTerce
	FinSi
	
	Escribir  "El numero mayor es: ", NroMayor
FinProceso
