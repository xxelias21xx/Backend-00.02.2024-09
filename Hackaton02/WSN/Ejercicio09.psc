Algoritmo Ejercicio09
	//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba
	//más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
	definir salario Como Real
	Escribir "Sueldo del trabajador"
	Leer  salario
	si salario <= 2000  Entonces
		salario = salario * 1.1
	SiNo
		si salario >= 2000 Entonces
			salario = salario * 1.05
		finsi	
		
	FinSi
	Escribir "Nuevo Salario : " salario
	
FinAlgoritmo
