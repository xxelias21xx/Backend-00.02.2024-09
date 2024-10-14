// 17. Hacer un algoritmo en Pseint donde se ingrese una
// hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	Definir hora, minuto, seg, nhora, nminuto, nseg Como Entero
	Escribir "Ingrese la hora a evaluar"
	Escribir "HH:"
	Leer hora
	Escribir "MM:"
	Leer minuto
	Escribir "SS:"
	Leer seg
	
	si hora = 23 y minuto = 59 y seg = 59 Entonces
		nhora = 0
		nminuto = 0
		nseg = 0
	sino
		si hora <> 23 y minuto = 59 y seg = 59 Entonces
			nhora = hora + 1
			nminuto = 0
			nseg = 0
		SiNo
			si hora <> 23 y minuto <> 59 y seg = 59 Entonces
				nhora = hora
				nminuto = minuto + 1
				nseg = 0
			SiNo
				nhora = hora
				nminuto = minuto
				nseg = seg + 1
			FinSi
		FinSi
	FinSi
	
	
	Escribir "La hora dentro de un segundo será ", nhora, ":", nminuto, ":", nseg, "."
	
FinProceso
