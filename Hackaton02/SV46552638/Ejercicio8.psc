Proceso Ejercicio8
	//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	Escribir "ingrese primera nota"
	leer nota1
	
	Escribir "ingrese segunda nota"
	leer nota2
	
	Escribir "ingrese tercera nota"
	leer nota3
	
	promedio =(nota1+nota2+nota3)/3
	promedio = trunc(promedio*100)/100
	
	Escribir "Supromedio es: ", promedio
	
	Si promedio>= 10.5 Entonces
		Escribir "Aprobado "
	SiNo
		Escribir "desaprobado "
	Fin Si
	
FinProceso
