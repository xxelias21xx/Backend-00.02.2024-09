Proceso E11
	//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
		Definir num1, num2, num3 Como Entero
		Definir mayor Como Entero
		
		Escribir "Ingresa el primer número: "
		Leer num1
		Escribir "Ingresa el segundo número: "
		Leer num2
		Escribir "Ingresa el tercer número: "
		Leer num3
		
		mayor = num1  
		
		Si num2 > mayor Entonces
			mayor = num2
		Fin Si
		
		Si num3 > mayor Entonces
			mayor = num3
		Fin Si
		
		Escribir "El número mayor es: ", mayor
	Fin Proceso
	
