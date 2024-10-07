// 15. Hacer un algoritmo en Pseint que convierta 
// centímetros a pulgadas y libras a kilogramos.
Proceso Ejercicio15
	definir operacion Como Caracter
	definir input Como Real
	
	Escribir "¿Que unidad desea convertir?"
	Escribir "Inserte C si desea convertir centimetros a pulgadas: "
	Escribir "Inserte L si desea convertir libras a kilogramos: "
	Leer operacion
	
	operacion = Minusculas(operacion)
	
	Segun operacion Hacer
		'c':
			Escribir "Inserte la cantidad de centimetros a convertir a pulgadas:"
			Leer input
			Escribir input, " centimetros equivalen a ", input*0.393701, " pulgadas." 
		'l':
			Escribir "Inserte la cantidad de libras a convertir a kilogramos:"
			Leer input
			Escribir input, " libras equivalen a ", input*0.453592, " kilogramos." 
	Fin Segun
	
FinProceso
