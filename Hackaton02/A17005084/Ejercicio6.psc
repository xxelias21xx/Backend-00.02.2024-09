//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
//entonces las horas extras se le pagarán a $25 por hora.
Proceso SueldoSemanaTrabajador
	
	Escribir "Ingresar total de horas trabajadas en la semana: "
	Leer  Horas
	Definir  HrExtras Como Entero
	Definir TotHr,TotHrExt,TotPg Como Real
	HrExtras=Horas-40
	
	Si HrExtras<=0 Entonces
		TotHr=Horas*20
		TotHrExt=0
	SiNo
		TotHr=(Horas-HrExtras)*20
		TotHrExt=HrExtras*25
	Fin Si
	TotPg=TotHr+TotHrExt
	
	Escribir  "Total pago horas laborables * $20: ", TotHr
	Escribir  "Total pago horas extras * $25: ", TotHrExt
	Escribir  "Total pago final a la semana: ", TotPg
	
	
	
FinProceso
