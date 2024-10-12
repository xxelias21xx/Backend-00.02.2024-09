Proceso E24
	//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
	Definir suma Como Entero
    Definir i Como Entero
	
    // Inicializar la suma
    suma <- 0
	
    // Calcular la suma de los números pares hasta 1000
    Para i <- 2 Hasta 1000 Con Paso 2 Hacer
        suma <- suma + i
    Fin Para
	
    // Mostrar el resultado
    Escribir "La suma de todos los números pares hasta 1000 es: ", suma
Fin Proceso		