//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas
//y libras a kilogramos.

Proceso Convertidor
	
	Definir cm,in,lbs,kg Como Real
	
	Escribir "Ingresa los centimetros que deseas convertir a pulgadas: "
	leer cm
	Escribir "Ingresa las libras que deseas convertir a kilogramos:"
	leer lbs
	
	in=cm/2.54
	kg=lbs/2.205
	
	Escribir cm," centimetros a pulgadas son: ",in," pulgada(s)"
	Escribir lbs," libras a kilogramos son: ",kg," kilogramo(s)"
	
FinProceso
