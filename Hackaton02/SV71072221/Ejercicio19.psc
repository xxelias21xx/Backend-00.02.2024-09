// 19. Hacer un algoritmo en Pseint para una heladería se tienen
// 4 tipos de empleados ordenados de la siguiente forma con su
// número identificador y salario diario correspondiente:
//     Cajero (56$/día).
//     Servidor (64$/día).
//     Preparador de mezclas (80$/día).
//     Mantenimiento (48$/día).
// El dueño de la tienda desea tener un programa donde sólo ingrese
// dos números enteros que representen al número identificador del 
// empleado y la cantidad de días que trabajó en la semana (6 días 
// máximos). Y el programa le mostrará por pantalla la cantidad de 
// dinero que el dueño le debe pagar al empleado que ingresó
Proceso Ejercicio19
	Definir id, empleado Como Cadena
	definir salario, cantDias Como Entero
	Escribir "** Identificadores de tipo de Empleado **"
	Escribir "51 para CAJEROS"
	Escribir "52 para SERVIDOR"
	Escribir "53 para PREPARADOR DE MEZCLAS"
	Escribir "54 para MANTENIMIENTO"
	Escribir "-----------------------------------------------"
	Escribir "Ingrese un identificador a empleado a evaluar:"
	leer id
	Segun id Hacer
		"51":
			empleado = "cajero"
			salario = 56
		"52":
			empleado = "servidor"
			salario = 64
		"53":
			empleado = "preparador de mezclas"
			salario = 80
		"54":
			empleado = "de mantenimiento"
			salario = 48
		De Otro Modo:
			Escribir "Ingrese un identificador valido"
	Fin Segun
	Escribir "Ingrese la cantidad de horas trabajadas por el"
	Escribir "empleado ", empleado, ":"
	Leer cantDias
	Escribir "Para una cantidad trabajada de ", cantDias, " dias,"
	Escribir "el empleado ", empleado, " debe recibir"
	Escribir "$",cantDias*salario, " en total."
FinProceso
