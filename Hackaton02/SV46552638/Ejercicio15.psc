Proceso Ejercicio15
	//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	Escribir "Conversor de unidades:"
	opci =0
	unidades =0.0
	resultado=0.0
	Repetir
		Escribir "Ingrese una opcion"
		Escribir "1: Convertir Centimetros a Pulgadas"
		Escribir "2: Convertir libras a Pulgadas"
		Leer opci
	Hasta Que (opci >0 y opci<3 )
	Si opci == 1 Entonces
		Escribir "Ingrese cantidad de centimetros: "
		Leer unidades
		resultado=unidades*(0.393701)
		Escribir resultado," Pulgadas"
	SiNo
		Escribir "Ingrese cantidad de libras: "
		Leer unidades
		resultado=unidades*(0.453592)
		Escribir resultado," Kilogramos"
	Fin Si
FinProceso
