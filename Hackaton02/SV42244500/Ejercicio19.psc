//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la
//siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen
//al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso Ejercicio19
	
	Definir identificador, diasTrabajados, salarioDiario, salarioSemanal Como Entero
	
    Escribir "Ingrese el identificador del empleado: "
    Leer identificador
    Escribir "Ingrese la cantidad de dias trabajados (maximo 6): "
    Leer diasTrabajados
	
    Si diasTrabajados > 6 Entonces
        Escribir "La cantidad de dias trabajados no puede ser mayor a 6"
    SiNo
        Segun identificador Hacer
	Caso 1:
		salarioDiario = 56
	Caso 2:
		salarioDiario = 64
	Caso 3:
		salarioDiario = 80
	Caso 4:
		salarioDiario = 48
	De Otro Modo:
		Escribir "Identificador de empleado invalido."
	FinSegun

	salarioSemanal = salarioDiario * diasTrabajados

	Escribir "El salario semanal del empleado es: ", salarioSemanal
	
FinSi
	
FinProceso
