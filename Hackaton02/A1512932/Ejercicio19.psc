Algoritmo Ejercicio19
//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente
//		Cajero (56$/día).
//		Servidor (64$/día).
//		Preparador de mezclas (80$/día).
//		Mantenimiento (48$/día).
//	El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que 
//	trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

	Definir codEmpleado Como Entero
	C = 56 //CAJERO
	S = 64 //SERVIDOR.
	P = 80 //PREPARADOR DE MEZCLAS
	M = 48 //MANTENIMIENTO
	Escribir "Ingrese el Numero de Id del empleado que desea pagar"
	Escribir "ID:11 (Cajero)"
	Escribir "ID:12 (Sevidor)"
	Escribir "ID:13 (Preparador de mezclas)"
	Escribir "ID:14 (Mantenimiento)"
	leer codEmpleado
	
	Escribir "Ingrese la cantidad de días trabajados (máximo 6): "
	Leer diasTrabajados
	
	// Validar que los días trabajados no sean más de 6
	si diasTrabajados < 1 o diasTrabajados > 6 Entonces
		
		Escribir "Número de días inválido. Debe estar entre 1 y 6."
	sino
		Segun codEmpleado hacer
			11:
				semaPagar = diasTrabajados * C
				Escribir "Ha escogido pagar al Cajero. Se le pagará por semana trabajada S/", semaPagar
			12:
				semaPagar = diasTrabajados * S
				Escribir "Ha escogido pagar al Servidor. Se le pagará por semana trabajada S/", semaPagar
			13:
				semaPagar = diasTrabajados * P
				Escribir "Ha escogido pagar al Preparador de mezclas. Se le pagará por semana trabajada S/", semaPagar
			14:
				semaPagar = diasTrabajados * M
				Escribir "Ha escogido pagar al de Mantenimiento. Se le pagará por semana trabajada S/", semaPagar
			De Otro Modo:
				Escribir "Número inválido, vuelva a intentarlo"
		FinSegun
		
	FinSi
	
	
FinAlgoritmo
