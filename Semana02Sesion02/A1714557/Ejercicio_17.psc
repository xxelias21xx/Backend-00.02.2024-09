//17. Hacer un algoritmo en Pseint donde se ingrese una hora
//y nos calcule la hora dentro de un segundo.
Proceso Suma_Segundo
	Definir hora,minuto,segundo Como Entero
	Escribir "Ingrese las horas (0-23):"
	leer hora
	Escribir "Ingrese los minutos (0-59):"
	leer minuto
	Escribir "Ingrese los segundos (0-59):"
	leer segundo
	
	segundo=segundo+1
	si segundo=60 Entonces
		segundos = 0
		minuto=minuto+1
	FinSi
	si minuto=60 Entonces
		minuto=0
		hora=hora+1
	FinSi
	si hora=24 Entonces
		hora=0
	FinSi
	Escribir  "La hora dentro de un segundo será: horas: ",hora, " minutos: ",minuto, " segundos: ",segundo
FinProceso
