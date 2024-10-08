Proceso ejercicio32
	//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. 


	
    // Inicializar la población máxima y la ciudad con mayor población
    maxPoblacion <- 0
    ciudadMasPoblada <- ""
	
    // Ciclo para cada provincia
    Para i <- 1 Hasta 3 Hacer
        Escribir "Ingrese el nombre de la provincia ", i, ":"
        Leer provincia
		
        // Ciclo para cada ciudad de la provincia
        Para j <- 1 Hasta 11 Hacer
            Escribir "Ingrese el nombre de la ciudad ", j, " de ", provincia, ":"
            Leer ciudad
            Escribir "Ingrese la población de ", ciudad, ": "
            Leer poblacion
			
            // Comparar la población actual con la máxima
            Si poblacion > maxPoblacion Entonces
                maxPoblacion <- poblacion
                ciudadMasPoblada <- ciudad
            FinSi
        FinPara
    FinPara
	
    // Mostrar el resultado
    Escribir "La ciudad con mayor población es: ", ciudadMasPoblada
    Escribir "Con una población de: ", maxPoblacion

	
FinProceso
