Proceso EJERCICIO15
	//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	
	Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    // Solicitar los valores al usuario
    Escribir "Ingrese la cantidad de centímetros: "
    Leer centimetros
    Escribir "Ingrese la cantidad de libras: "
    Leer libras
	
    // Realizar las conversiones
    pulgadas <- centimetros / 2.54
    kilogramos <- libras / 2.2046
	
    // Mostrar los resultados
    Escribir centimetros, " centímetros equivalen a ", pulgadas, " pulgadas."
    Escribir libras, " libras equivalen a ", kilogramos, " kilogramos."
	
FinProceso
