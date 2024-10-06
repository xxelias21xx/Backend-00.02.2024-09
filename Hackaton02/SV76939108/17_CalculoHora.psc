Algoritmo CalculoHora
	Definir Hora, Min, Seg Como Entero
	Escribir "Ingrese las horas: "
	Leer Hora 
	Escribir "Ingrese los minutos: "
	Leer Min
	Escribir "Ingrese los segundos: "
	Leer Seg
	Seg<-Seg+1
	Si Seg=60 Entonces
		Seg<-0
		Min<-Min+1
	FinSi
	Si Min=60 Entonces
		Min<-0
		Hora<-Hora+1
	FinSi
	Si Hora=24 Entonces
		Hora<-0
	FinSi
	Escribir "La hora dentro de un segundo será: horas: ",Hora,", minutos: ",Min,", segundos: ",Seg
FinAlgoritmo
