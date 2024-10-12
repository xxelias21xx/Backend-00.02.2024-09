//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Ejercicio08
	
	Definir primeraNota, segundaNota, terceraNota, promedio Como Real
	
	Escribir "Ingrese la primera nota"
	Leer primeraNota
	Escribir "Ingrese la segunda nota"
	Leer segundaNota
	Escribir "Ingrese la tercera nota"
	Leer terceraNota
	
	promedio = ( primeraNota + segundaNota + terceraNota ) / 3
	Escribir "El promedio de las notas es de: ", promedio
	
	si promedio > 10 Entonces
		Escribir "El estudiante esta aprobado"
	SiNo		
		Escribir "El estudiante esta desaprobado"
	FinSi
	
FinProceso
