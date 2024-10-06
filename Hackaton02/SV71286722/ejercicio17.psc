Proceso CalcularHoraSiguiente
    Definir hora, minuto, segundo Como Entero
    Definir nuevaHora, nuevoMinuto, nuevoSegundo Como Entero
	
    // Solicitar al usuario que ingrese la hora
    Escribir "Ingrese la hora (formato 24 horas): "
    Leer hora
    Escribir "Ingrese los minutos: "
    Leer minuto
    Escribir "Ingrese los segundos: "
    Leer segundo
	
    // Sumar un segundo
	segundo <- segundo + 1

	// Verificar si los segundos superan 59
	Si segundo = 60 Entonces
		segundo <- 0
		minuto <- minuto + 1 // Aumentar un minuto
	FinSi

	// Verificar si los minutos superan 59
	Si minuto = 60 Entonces
		minuto <- 0
		hora <- hora + 1 // Aumentar una hora
	FinSi

	// Verificar si las horas superan 23
	Si hora = 24 Entonces
		hora <- 0 // Reiniciar a 0 si pasa de 23
	FinSi

	// Mostrar la nueva hora
	Escribir "La hora después de un segundo es: ", hora, ":", minuto, ":", segundo
FinProceso
