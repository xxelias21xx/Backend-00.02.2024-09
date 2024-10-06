Proceso Ejercicio16ver2
	num=0
	Repetir
		Escribir "Ingresa un número del 1 al 31: "
		Leer num
	Hasta Que (num>0 y num<32)
	
	Si num<8 Entonces
		num = num
	SiNo
		num = num MOD 7
	Fin Si
	
	Segun num Hacer
		1: 
			Escribir "El día es Lunes."
		2: 
			Escribir "El día es Martes."
		3: 
			Escribir "El día es Miércoles."
		4: 
			Escribir "El día es Jueves."
		5: 
			Escribir "El día es Viernes."
		6: 
			Escribir "El día es Sábado."
		De otro modo: 
			Escribir "El día es Domingo."
	FinSegun
	
FinProceso
