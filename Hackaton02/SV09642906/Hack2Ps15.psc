Proceso E15
	//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	Definir centimetros Como Real
    Definir libras Como Real
    Definir pulgadas Como Real
    Definir kilogramos Como Real
	
    // Conversión de centímetros a pulgadas
    Escribir "Ingresa la medida en centímetros:"
    Leer centimetros
    pulgadas <- centimetros / 2.54  // 1 pulgada = 2.54 centímetros
    Escribir centimetros, " centímetros son ", pulgadas, " pulgadas."
	
    // Conversión de libras a kilogramos
    Escribir "Ingresa el peso en libras:"
    Leer libras
    kilogramos <- libras * 0.453592  // 1 libra = 0.453592 kilogramos
    Escribir libras, " libras son ", kilogramos, " kilogramos."
Fin Proceso


