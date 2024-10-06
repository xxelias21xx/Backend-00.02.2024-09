Proceso E8
	//Hacer un algoritmo en Pseint para calcular el promedio de tres notas 
	//y determinar si el estudiante aprobó o no.


		Definir nota1, nota2, nota3, promedio Como Real
		Definir aprobado Como Cadena
		
		Escribir "Ingrese la primera nota: "
		Leer nota1
		Escribir "Ingrese la segunda nota: "
		Leer nota2
		Escribir "Ingrese la tercera nota: "
		Leer nota3
		
		promedio <- (nota1 + nota2 + nota3) / 3
		
		Si promedio >= 10.5 Entonces
			aprobado <- "Aprobado"
		Sino
			aprobado <- "Reprobado"
		FinSi
		
		Escribir "El promedio es: ", promedio
		Escribir "El estudiante está: ", aprobado
FinProceso
