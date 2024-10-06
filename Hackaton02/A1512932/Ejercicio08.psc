Algoritmo Ejercicio08
	//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	definir nota1, nota2, nota3 Como Entero
	
	notaFinal=20
	Aprobado = 12
	
	Escribir  "Alumnito, para saber si ha aprobado escriba sus tres notas, suerte."
	Escribir  "Alumnito, escriba su primera nota"
	Leer nota1
	Escribir  "Alumnito, escriba su segunda nota"
	Leer nota2
	Escribir  "Alumnito, escriba su Tercera nota"
	Leer nota3
	
	// Calcular el promedio de las tres notas
	promedio = (nota1+nota2+nota3)/3
	
	// Determinar si el estudiante aprobó o no
	Si promedio >= Aprobado Entonces
        Escribir "Alumnito, ¡Felicidades! Ha aprobado con un promedio de ", promedio
    Sino
        Escribir "Alumnito, siga estudiando, ha desaprobado con un promedio de ", promedio
    FinSi
FinAlgoritmo
