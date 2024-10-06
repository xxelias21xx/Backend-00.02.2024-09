//16. Hacer un algoritmo en Pseint que lea un número y según ese número,
//indique el día que corresponde.
Proceso Det_Dia
	Definir num Como Caracter
	Escribir "Introduzca el numero del 1 al 7:"
	leer num
	num <- Minusculas(num)
	Segun num Hacer
		'1':
			Escribir "Corresponde al dia Lunes."
		'2':
			Escribir "Corresponde al dia Martes."
		'3':
			Escribir "Corresponde al dia Miercoles."
		'4':
			Escribir "Corresponde al dia Jueves."
		'5':
			Escribir "Corresponde al dia Viernes."
		'6':
			Escribir "Corresponde al dia Sabado."
		'7':
			Escribir "Corresponde al dia Domingo."
		De Otro Modo:
			Escribir "Numero no Corresponde a los dias de la semana."
	FinSegun
	
FinProceso
