//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	
	Definir numero Como Entero
	Definir dia Como Caracter
	
	Escribir "Escriba un numero del 1 al 7"
	Leer numero
	
	Segun numero Hacer
		1: dia = "Lunes"
		2: dia = "Martes"
		3: dia = "Miercoles"
		4: dia = "Jueves"
		5: dia = "Viernes"
		6: dia = "Sabado"
		7: dia = "Domingo"
		De Otro Modo:
			dia = "Numero invalido, por favor escribir un numero del 1 al 7"
	FinSegun
	
	Escribir dia
	
FinProceso
