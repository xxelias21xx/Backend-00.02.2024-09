Proceso CiudadConMayorPoblacion
    Definir ciudad, ciudadMayor Como Texto
    Definir poblacion, mayorPoblacion Como Entero
    mayorPoblacion <- 0
    ciudadMayor <- ""
	
    // Bucle para ingresar los datos de las 3 provincias y sus 11 ciudades
    Para provincia <- 1 Hasta 3 Con Paso 1 Hacer
        Escribir "Ingrese el nombre de la provincia ", provincia, ":"
        Leer provinciaNombre
        
        Para ciudadNum <- 1 Hasta 11 Con Paso 1 Hacer
            Escribir "Ingrese el nombre de la ciudad ", ciudadNum, " de la provincia ", provinciaNombre, ":"
            Leer ciudad
			
            Escribir "Ingrese la población de la ciudad ", ciudad, ":"
            Leer poblacion
			
            // Verificar si esta ciudad tiene mayor población que la anterior
            Si poblacion > mayorPoblacion Entonces
                mayorPoblacion <- poblacion
                ciudadMayor <- ciudad
            Fin Si
        Fin Para
    Fin Para
	
    // Mostrar la ciudad con mayor población
    Escribir "La ciudad con mayor población es: ", ciudadMayor, " con una población de ", mayorPoblacion
Fin Proceso
