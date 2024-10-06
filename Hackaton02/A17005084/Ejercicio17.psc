//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso CalculoHora
	Definir  horas,minutos,segundos Como Entero
	Definir  hormar,minumar,segumar como cadena
	Escribir "Ingrese las horas (0-23)"
	leer horas
	Escribir "Ingrese los minutos(0-59)"
	leer minutos
	Escribir "Ingrese los segundos (0-59)"
	leer segundos
	
	segundos= segundos+1;
	
	si segundos=60 Entonces
		segundos=0;
		minutos=minutos+1;
	FinSi
	
	si minutos=60 Entonces
		minutos=0;
		horas=horas+1;
	FinSi
	
	si horas=24 Entonces
		horas=0;
	FinSi
	
	segumar=ConvertirATexto(segundos)
	minumar=ConvertirATexto(minutos)
	hormar=ConvertirATexto(horas)
	
	Si segundos<10 Entonces
		segumar="0" + segumar
	Fin Si
	Si minutos<10 Entonces
		minumar="0" + minumar
	Fin Si
	Si horas<10 Entonces
		hormar="0" + hormar
	Fin Si	
	
	Escribir  "La hora dentro de un segundo será: ",hormar,":",minumar,":", segumar
FinProceso
