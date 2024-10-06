Proceso ejercicio16
	//Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
	Definir numero Como Entero
	Definir dia Como Caracter
	
    // Solicitar al usuario un número
    Escribir "Ingrese un número del 1 al 7 para representar un día de la semana: "
    Leer numero
	
    // Validar el número ingresado
    Si (numero < 1) O (numero > 7) Entonces
        Escribir "Número inválido. Ingrese un número entre 1 y 7."
    SiNo
        // Utilizar una estructura Según para asignar el día
        Según numero Hacer
	Caso 1:
		dia <- "Lunes"
	Caso 2:
		dia <- "Martes"
	Caso 3:
		dia <- "Miércoles"
	Caso 4:
		dia <- "Jueves"
	Caso 5:
		dia <- "Viernes"
	Caso 6:
		dia <- "Sábado"
	Caso 7:
		dia <- "Domingo"
	De Otro Modo:
		Escribir "Número inválido."
FinSegun

// Mostrar el día correspondiente
Escribir "El día correspondiente es: ", dia
    FinSi

	
FinProceso
