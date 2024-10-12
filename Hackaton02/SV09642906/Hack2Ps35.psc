Proceso E35
	//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor,
	//se debe ingresar sólo veinte números
		Definir num Como Real
		Definir maxNum, minNum Como Real
		
		// Leer el primer número
		Escribir "Ingrese el primer número: "
		Leer num
		maxNum <- num
		minNum <- num
		
		Para i Desde 2 Hasta 20 Hacer
			Escribir "Ingrese el número ", i, ": "
			Leer num
			
			// Actualizar maxNum y minNum
			Si num > maxNum Entonces
				maxNum <- num
			Fin Si
			
			Si num < minNum Entonces
				minNum <- num
			Fin Si
		Fin Para
		
		Escribir "El número mayor es: ", maxNum
		Escribir "El número menor es: ", minNum
	Fin Proceso