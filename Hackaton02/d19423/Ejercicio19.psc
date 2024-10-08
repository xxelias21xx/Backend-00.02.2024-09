//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número 
//identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).

Algoritmo SalarioSemanalHeladeria
    Definir tipoEmpleado, diasTrabajados Como Entero
    Definir salarioDiario, salarioTotal Como Real
    
    Escribir "Ingrese el número identificador del tipo de empleado:"
    Escribir "1: Cajero (56$/día)"
    Escribir "2: Servidor (64$/día)"
    Escribir "3: Preparador de mezclas (80$/día)"
    Escribir "4: Mantenimiento (48$/día)"
    Leer tipoEmpleado
    
    Escribir "Ingrese la cantidad de días trabajados (máximo 6 días):"
    Leer diasTrabajados
    
    Si diasTrabajados < 0 o diasTrabajados > 6 Entonces
        Escribir "Error: El número de días trabajados no es válido."

FinSi


Segun tipoEmpleado Hacer
	1: salarioDiario <- 56
	2: salarioDiario <- 64
	3: salarioDiario <- 80
	4: salarioDiario <- 48
	De Otro Modo:
		Escribir "Error: El número ingresado no corresponde a un empleado válido."

FinSegun


salarioTotal <- salarioDiario * diasTrabajados


Escribir "El salario total a pagar al empleado es: $", salarioTotal
    
FinAlgoritmo


