Proceso CalcularAumentoSueldo
    Definir sueldo_actual, aumento, sueldo_nuevo Como Real
	
    // Solicitar al usuario el sueldo actual
    Escribir "Ingrese el sueldo actual del trabajador: "
    Leer sueldo_actual
	
    // Determinar el aumento según el sueldo actual
    Si sueldo_actual > 2000 Entonces
        aumento <- sueldo_actual * 0.05 // 5% de aumento
    Sino
        aumento <- sueldo_actual * 0.10 // 10% de aumento
    FinSi
	
    // Calcular el nuevo sueldo
    sueldo_nuevo <- sueldo_actual + aumento
	
    // Mostrar el aumento y el nuevo sueldo
    Escribir "El aumento es: $", aumento
    Escribir "El nuevo sueldo es: $", sueldo_nuevo
FinProceso
