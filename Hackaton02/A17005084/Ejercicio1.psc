//1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
Proceso DeterminarNumero3Digitos
	Escribir  "Escriba un numero"
	Leer  num
	
	Si num>99 Y num<1000 Entonces
		Escribir "El número ingresado tiene 3 digitos"
	SiNo
		Escribir  "El número ingresado no tiene 3 digitos"
	Fin Si
FinProceso