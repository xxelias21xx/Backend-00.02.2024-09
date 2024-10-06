//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Ordenar_3Num
	
	Definir num1,num2,num3,aux Como Entero
	
	Escribir "Ingrese el primer número:"
	Leer num1
	Escribir "Ingrese el segundo número:"
	Leer num2
	Escribir "Ingrese el tercer número:"
	Leer num3
	
	Si num1 > num2 Entonces
		aux <- num1
		num1 <- num2
		num2 <- aux
	FinSi
	
	Si num2 > num3 Entonces
		aux <- num2
		num2 <- num3
		num3 <- aux
	FinSi
	
	Si num1 > num2 Entonces
		aux <- num1
		num1 <- num2
		num2 <- aux
	FinSi
	
	
	Escribir "Números ordenados de menor a mayor:"
	Escribir num1
	Escribir num2
	Escribir num3
	
	
FinProceso
