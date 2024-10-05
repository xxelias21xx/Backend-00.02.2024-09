Proceso E32
	//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias
	//y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso.
	
	Definir poblacion Como Entero
    Definir maxPoblacion Como Entero
    Definir ciudadConMayorPoblacion Como Cadena
    Definir nombreCiudad Como Cadena
	
    maxPoblacion <- 0
    ciudadConMayorPoblacion <- ""
	
    Para ciudad Desde 1 Hasta 3 Hacer
        Escribir "Ingrese el nombre de la ciudad ", ciudad, ": "
        Leer nombreCiudad
        Escribir "Ingrese la población de ", nombreCiudad, ": "
        Leer poblacion
		
        Si poblacion > maxPoblacion Entonces
            maxPoblacion <- poblacion
            ciudadConMayorPoblacion <- nombreCiudad
        Fin Si
    Fin Para   
	Escribir "La ciudad con la mayor población es: ", ciudadConMayorPoblacion, " con ", maxPoblacion, " habitantes."
Fin Proceso