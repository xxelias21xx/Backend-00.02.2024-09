Proceso DiaDeLaSemana
    Definir dia Como Entero
    Definir nombreDia Como Caracter
	
    // Solicitar al usuario que ingrese un número del 1 al 7
    Escribir "Ingrese un número del 1 al 7: "
    Leer dia
	
    // Determinar el día de la semana correspondiente
    Segun dia Hacer
        Caso 1:
            nombreDia <- "Lunes"
        Caso 2:
            nombreDia <- "Martes"
        Caso 3:
            nombreDia <- "Miércoles"
        Caso 4:
            nombreDia <- "Jueves"
        Caso 5:
            nombreDia <- "Viernes"
        Caso 6:
            nombreDia <- "Sábado"
        Caso 7:
            nombreDia <- "Domingo"
        De Otro Modo:
            Escribir "Número inválido. Debe ser del 1 al 7."
	Fin Segun

	// Mostrar el nombre del día
	Escribir "El día correspondiente es: ", nombreDia
FinProceso
