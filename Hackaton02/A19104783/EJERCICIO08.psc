Proceso EJERCICIO08
	// 8 .Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	
	Definir nota1, nota2, nota3, promedio Como Real
	
    // Solicitar al usuario las notas
    Escribir "Ingrese la primera nota: "
    Leer nota1
    Escribir "Ingrese la segunda nota: "
    Leer nota2
    Escribir "Ingrese la tercera nota: "
    Leer nota3
	
    // Calcular el promedio   
	
    promedio <- (nota1 + nota2 + nota3) / 3
	
    // Mostrar el promedio
    Escribir "El promedio del estudiante es: ", promedio
	
    // Determinar si aprobó o reprobó
    Si promedio >= 13 Entonces
        Escribir "El estudiante aprobó."
    SiNo
        Escribir "El estudiante reprobó."
    FinSi

FinProceso
