//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//	Cajero (56$/día).
//	Servidor (64$/día).
//	Preparador de mezclas (80$/día).
//	Mantenimiento (48$/día).
//	El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al
// número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Algoritmo  Ejercicio19
	
	
	
	Definir empleado Como Caracter
	definir salario Como Real
	Definir dias Como Entero
	
	Escribir "Codigo de Empleado:"
	Escribir "01 = Cajero"
	Escribir "02 = Servidor"
	Escribir "03 = Preparador de Mezclas"
	Escribir "04 = Mantenimiento"
	
	Leer empleado
	
	Escribir "Cantidad de días (Máximo 6):"
	Leer dias
	
			Segun empleado Hacer
				"01":
					salario = 56
				"02":
					salario = 64
				"03":
					salario = 80
				"04":
					salario = 48
				De Otro Modo:
					salario = 56
			Fin Segun
	
	
	
	
	// Mostrar los resultados
	Escribir "El salario  del empleado elegido es ", salario * dias
	
	
	
	
	
	
FinAlgoritmo
	