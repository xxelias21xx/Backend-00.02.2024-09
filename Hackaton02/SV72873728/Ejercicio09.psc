Proceso Ejercicio09
	
	Definir Sueldo_actual, Sueldo_nuevo, Aumento Como Real
	
	Escribir "Ingrese sueldo del trabajador"
	Leer Sueldo_actual
	
	Mientras  Sueldo_actual < 0 Hacer
		Escribir "Dato no valido"
		Escribir "Ingrese sueldo del trabajador"
		Leer Sueldo_actual
	Fin Mientras
	
	Si Sueldo_actual > 2000 Entonces
		Aumento = 0.05
	SiNo
		Aumento =0.1
	FinSi
	
	Sueldo_nuevo = Sueldo_actual*(1+Aumento)
	
	Escribir "El nuevo sueldo es: ", Sueldo_nuevo
	
FinProceso
