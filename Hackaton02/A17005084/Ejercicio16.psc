//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso DiaXNro
	
	Escribir  "Ingrese número entre 1 al 7: "
	Leer NroDia
	Definir  DiaSemana Como Caracter
	Segun NroDia Hacer
		1:
			Escribir  "Corresponde al día lunes"
		2:
			Escribir  "Corresponde al día martes"
		3:
			Escribir  "Corresponde al día miercoles"
		4:
			Escribir  "Corresponde al día jueves"
		5:
			Escribir  "Corresponde al día viernes"
		6:
			Escribir  "Corresponde al día sabado"
		7:
			Escribir  "Corresponde al día domingo"
		De Otro Modo:
			Escribir  "Numero ingresado no valido"
	Fin Segun
	
FinProceso
