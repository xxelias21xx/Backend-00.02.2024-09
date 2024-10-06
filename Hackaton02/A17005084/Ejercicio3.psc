//3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso DeterminaNumeroFinal4
	
	Escribir "Ingresar número a determinar"
	Leer nume
	Definir  nrofinal Como Entero
	nrofinal= nume %10
	
	Si nrofinal==4 Entonces
		Escribir "El número termina en 4"
	SiNo
		Escribir  "El número no termina en 4"
	Fin Si
	
FinProceso
