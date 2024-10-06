//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente 
//forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).			
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
//identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso ProgramHeladeria
	
	Escribir "Ingrese código de empleado: "
	Escribir "10 ==> Cajero"
	Escribir "11 ==> Servidor"
	Escribir "12 ==> Preparador de mezclas"
	Escribir "13 ==> Mantenimiento"
	Leer CodEmple
	
	Definir VeriCod Como Logico
	Definir  SuelxDia Como Entero
	VeriEst=Verdadero
	
	Segun CodEmple Hacer
		"10":
			SuelxDia=56
		"11":
			SuelxDia=64
		"12":
			SuelxDia=80
		"13":
			SuelxDia=48
		De Otro Modo:
			VeriEst=falso
	Fin Segun
	
	Si VeriEst Entonces
		Escribir "Ingrese la cantidad de dias trabajados en la semana;"
		Leer CantDia		
		Si CantDia<=6 Entonces
			Escribir "El pago semanal del empleado es: ", (SuelxDia * CantDia)			
		SiNo
			Escribir "El numero de dias trabajados debe ser menor a 7"
		Fin Si		
	SiNo
		Escribir "El código del empleado es incorrecto"
	Fin Si
	
	
FinProceso
