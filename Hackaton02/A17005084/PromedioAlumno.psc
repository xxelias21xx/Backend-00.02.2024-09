//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso PromedioAlumno
	
	Escribir "Ingrese primera nota de alumno: "
	Leer not01
	
	Escribir "Ingrese segunda nota de alumno: "
	Leer not02
	
	Escribir "Ingrese tercera nota de alumno: "
	Leer not03
	
	Definir TotNota,Promedio Como Real
	Definir EstAlum Como Caracter
	
	TotNota=not01+not02+not03
	Promedio=TotNota/3
	
	Si Promedio<=11 Entonces
		EstAlum="El alumno esta desaprobado"
	SiNo
		EstAlum="El alumno esta aprobado"
	Fin Si
	
	Escribir "Promedio del alumno: " , Promedio
	Escribir EstAlum
	
FinProceso
