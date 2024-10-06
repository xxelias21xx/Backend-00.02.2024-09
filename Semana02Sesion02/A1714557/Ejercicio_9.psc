//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador,
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.
Proceso Aumento_Sueldo
	Definir salario, aumento, nuevoSueldo Como Real
	
	Escribir "Ingrese el salario del trabajador: "
	leer salario
	
	si salario > 2000 Entonces
		aumento= salario*0.05
	SiNo
		aumento= salario*0.1
	FinSi
	nuevoSueldo= salario+aumento
	Escribir "El aumento es: ",aumento
	Escribir "El nuevo salario es: ", nuevoSueldo
	
FinProceso
