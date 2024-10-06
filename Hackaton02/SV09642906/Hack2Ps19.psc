Proceso E19
	//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados 
//de la siguiente forma con su número identificador y salario diario correspondiente:
	
	//Cajero (56$/día).
	
	//Servidor (64$/día).
	
	//Preparador de mezclas (80$/día).
	
	//Mantenimiento (48$/día).
	//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen 
	//al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
	//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que 
	//ingresó
	
    Definir idEmpleado, diasTrabajados, salarioDiario, totalAPagar Como Real

    Escribir "Ingresa el identificador del empleado (56, 64, 80, 48):"
    Leer idEmpleado
    Escribir "Ingresa la cantidad de días trabajados (máximo 6):"
    Leer diasTrabajados
	
    Si diasTrabajados < 1 O diasTrabajados > 6 Entonces
        Escribir "La cantidad de días debe ser entre 1 y 6."
    Sino
        // Asignar salario diario según el identificador
        Segun idEmpleado Hacer
            56:
                salarioDiario <- 56
            64:
                salarioDiario <- 64
            80:
                salarioDiario <- 80
            48:
                salarioDiario <- 48
		De Otro Modo:
                Escribir "Identificador de empleado no válido."
		
		Fin Segun
	
	// Calcular el total a pagar
	totalAPagar <- salarioDiario * diasTrabajados
	
	// Mostrar el total a pagar
	Escribir "El total a pagar al empleado es: $", totalAPagar
Fin Si
Fin Proceso

	

