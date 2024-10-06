Proceso CalcularSueldoSemanal
    Definir horas_trabajadas Como Real
    Definir sueldo_semanal Como Real
	
    // Solicitar al usuario la cantidad de horas trabajadas
    Escribir "Ingrese la cantidad de horas trabajadas en la semana: "
    Leer horas_trabajadas
	
    // Calcular el sueldo semanal
    Si horas_trabajadas <= 40 Entonces
        sueldo_semanal <- horas_trabajadas * 20 // Pago por hora
    Sino
        // Calcular sueldo para horas regulares y horas extras
        sueldo_semanal <- (40 * 20) + ((horas_trabajadas - 40) * 25) // Pago por hora extra
    FinSi
	
    // Mostrar el sueldo semanal
    Escribir "El sueldo semanal es: $", sueldo_semanal
FinProceso
