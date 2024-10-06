Proceso CalcularSueldoSemanal
    Definir horas_trabajadas, sueldo Como Real
    Definir horas_extras, sueldo_horas_normales, sueldo_horas_extras Como Real
    
    Definir precio_hora_normal Como Real
    Definir precio_hora_extra Como Real
    precio_hora_normal = 20
    precio_hora_extra = 25
    
    Escribir "Ingresa el número de horas trabajadas en la semana:"
    Leer horas_trabajadas
    
    Si horas_trabajadas <= 40 Entonces
        sueldo = horas_trabajadas * precio_hora_normal
    Sino
        horas_extras = horas_trabajadas - 40
        sueldo_horas_normales = 40 * precio_hora_normal
        sueldo_horas_extras = horas_extras * precio_hora_extra
        sueldo = sueldo_horas_normales + sueldo_horas_extras
    FinSi
    
    Escribir "El sueldo semanal es: $", sueldo
FinProceso
