//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si 
//ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso AumentoTrabajador
	
	Escribir "Ingrese el sueldo del trabajador: "
	Leer  Suel
	
	Definir  aumento Como entero
	Definir TotAumen Como Real
	Si suel>2000 Entonces
		aumento=5
	SiNo
		aumento=10
	Fin Si
	
	TotAumen=suel+(suel*(aumento/100))
	
	Escribir "El aumento del empleado sera % ", aumento 
	Escribir "El nuevo sueldo seria ", TotAumen 
	
FinProceso
