Proceso ejercicio19
	//Hacer un algoritmo en Pseint para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero identificador y salario diario correspondiente:
	
    //Cajero (56$/d�a).
	
    //Servidor (64$/d�a).
	
    //Preparador de mezclas (80$/d�a).
	
    //Mantenimiento (48$/d�a).
	
    //El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero identificador del empleado y la cantidad de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar� por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres�

	Definir identificador, diasTrabajados, salarioDiario, salarioSemanal Como Entero
	
    // Solicitar al usuario el identificador del empleado y los d�as trabajados
    Escribir "Ingrese el identificador del empleado: "
    Leer identificador
    Escribir "Ingrese la cantidad de d�as trabajados (m�ximo 6): "
    Leer diasTrabajados
	
    // Validar la cantidad de d�as trabajados
    Si diasTrabajados > 6 Entonces
        Escribir "La cantidad de d�as trabajados no puede ser mayor a 6."
    SiNo
        // Calcular el salario diario seg�n el identificador
        Seg�n identificador Hacer
	Caso 1:
		salarioDiario <- 56
	Caso 2:
		salarioDiario <- 64
	Caso 3:
		salarioDiario <- 80
	Caso 4:
		salarioDiario <- 48
	De Otro Modo:
		Escribir "Identificador de empleado inv�lido."
FinSegun

// Calcular el salario semanal
salarioSemanal <- salarioDiario * diasTrabajados

// Mostrar el resultado
Escribir "El salario semanal del empleado es: $", salarioSemanal
FinSi

FinProceso
