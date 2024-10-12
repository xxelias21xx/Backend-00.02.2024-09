// que lea un número por el teclado y determinar si tiene tres dígitos.
Proceso Det_Si_Tiene3Digitos
	
	Escribir "digitar numero"
	leer num
	
	si num > 99 y num < 1000 Entonces
		Escribir "El numero tiene tres digitos" 
	SiNo
		Escribir "El numero no tiene tres digitos"
	FinSi
	
FinProceso
