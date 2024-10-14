Proceso Ejercicio08
	
	Definir nota1, nota2, nota3 Como Real
	Definir promedio Como Real
	
	Escribir "Ingrese nota 1"
	Leer nota1
	
	Mientras  nota1 > 20 o nota1 < 0 Hacer
		Escribir "Nota no valida"
		Escribir "Ingrese nota 1"
		Leer nota1
	Fin Mientras
	
	Escribir "Ingrese nota 2"
	Leer nota2
	
	Mientras  nota2 > 20 o nota2 < 0 Hacer
		Escribir "Nota no valida"
		Escribir "Ingrese nota 2"
		Leer nota2
	Fin Mientras
	
	Escribir "Ingrese nota 3"
	Leer nota3
	
	Mientras  nota3 > 20 o nota3 < 0 Hacer
		Escribir "Nota no valida"
		Escribir "Ingrese nota 3"
		Leer nota3
	Fin Mientras
	
	promedio = (nota1 + nota2 + nota3) / 3
	
	Si promedio < 10.5 Entonces
		Escribir "la nota final es: ", promedio
		Escribir "El alumno reprobó"
	SiNo
		Escribir "la nota final es: ",promedio
		Escribir "El alumno aprobó"
	Fin Si
	
FinProceso
