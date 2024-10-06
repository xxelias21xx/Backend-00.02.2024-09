//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas 
//y determinar si el estudiante aprobó o no
Proceso Promedio
	
	Definir nota1,nota2,nota3,notafinal Como Real
	Escribir "Ingresar primera nota: "
	Leer nota1
	Escribir "Ingresar segunda nota: "
	Leer nota2
	Escribir "Ingresar tercera nota: "
	Leer nota3
	
	notafinal=(nota1+nota2+nota3)/3
	si notafinal >= 11 Entonces
		Escribir "El estudiante ha aprobado con la nota de: ",notafinal
	SiNo
		Escribir "El estudiante no ha aprobado con la nota de: ",notafinal
	FinSi
FinProceso
