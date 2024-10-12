// 16. Hacer un algoritmo en Pseint que lea un número 
// y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	Definir num Como Entero
	Escribir "Ingrese un numero a evaluar para obtener el dia de la semana al que corresponde"
	Leer num
	Segun num Hacer
		1:
			Escribir "El numero ", num, " corresponde al día domingo"
		2:
			Escribir "El numero ", num, " corresponde al día lunes"
		3:
			Escribir "El numero ", num, " corresponde al día martes"
		4:
			Escribir "El numero ", num, " corresponde al día miercoles"
		5:
			Escribir "El numero ", num, " corresponde al día jueves"
		6:
			Escribir "El numero ", num, " corresponde al día viernes"
		7:
			Escribir "El numero ", num, " corresponde al día sabado"
		De Otro Modo:
			Escribir "Inserte un numero dentro del rango de dias de la semana"
	Fin Segun
FinProceso
