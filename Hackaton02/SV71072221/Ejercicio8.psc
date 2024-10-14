//8. Hacer un algoritmo en Pseint para calcular el promedio de 
// tres notas y determinar si el estudiante aprobó o no.
Proceso Ejercicio8
	Definir N1, N2, N3, prom Como Real
	Escribir "Ingrese la primera nota a evaluar"
	Leer N1
	Escribir "Ingrese la segunda nota a evaluar"
	Leer N2
	Escribir "Ingrese la tercera nota a evaluar"
	Leer N3
	
	prom = (N1 + N2 + N3) / 3
	Si prom >= 12.5 Entonces
		Escribir "El estudiante aprobo con una nota promedio de ", prom, "."
	SiNo
		Escribir "El estudiante desaprobo con una nota promedio de ", prom, "."
	FinSi
	
FinProceso
