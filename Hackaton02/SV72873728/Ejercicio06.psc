Proceso Ejercicio06
	
	Definir Horas, Sueldo Como Entero
	
	Escribir "Ingrese cantidad de horas trabajadas: "
	Leer Horas
	
	Si Horas < 0 Entonces
		Escribir "Cantidad de horas equivocadas"
	SiNo
		Si Horas <= 40 Entonces
			Sueldo = Horas * 20
		FinSi
		
		Si Horas > 40 Entonces
			Sueldo = 40 * 20 + 25 * (Horas - 40)
			Escribir "Las horas extras trabajadas son: ", Horas - 40
		FinSi
		
		Escribir "El sueldo es: ", Sueldo, " dolares"
	
	FinSi
	
FinProceso
