Algoritmo CalculoSalarioEmpleado
	Definir identificador, dias_trabajados, salario_diario, salario_total Como Entero
	
	Escribir "Ingrese el número identificador del empleado: "
	Escribir "1 - Cajero"
	Escribir "2 - Servidor"
	Escribir "3 - Preparador de mezclas"
	Escribir "4 - Mantenimiento"
	Leer identificador
	Escribir "Ingrese la cantidad de días trabajados (máximo 6 días): "
	Leer dias_trabajados
	
	Si dias_trabajados >= 1 Y dias_trabajados <= 6 Entonces
		Segun identificador Hacer
			1:
				salario_diario <- 56
			2:
				salario_diario <- 64
			3:
				salario_diario <- 80
			4:
				salario_diario <- 48
			De Otro Modo:
				Escribir "Error: Identificador de empleado no válido."
		FinSegun
		

		Si identificador >= 1 Y identificador <= 4 Entonces
			salario_total <- salario_diario * dias_trabajados
			Escribir "El salario total a pagar al empleado es: $", salario_total
		FinSi
		
	SiNo
		Escribir "Error: La cantidad de días trabajados debe ser entre 1 y 6."
	FinSi
FinAlgoritmo
