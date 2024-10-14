Proceso Ejercicio04
	//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir num1, num2, num3 Como Real
	
	Escribir "Ingrese Primer Número"
	Leer num1
	Escribir "Ingrese Segundo Número"
	Leer num2
	Escribir "Ingrese Tercer Número"
	Leer num3
	
		
    Si num1 > num2 Entonces 	//si num1 es mayor que num2 se van a intercambiar los números para que en num1 siempre esté el número menor
        may = num1
        num1 = num2
        num2 = may
    Fin Si
	
    Si num1 > num3 Entonces 	//Se compara el nuevo num1 con el num3 para ver si es mayor. Si es mayor, se intercambian para que en num1 siempre este el menor
        may = num1
        num1 = num3
        num3 = may
    Fin Si						//Luego de estas dos comparaciones, se sabe que en el num1 esta el número menor
	
    Si num2 > num3 Entonces	//Se compara num2 con num3 para ver cual es menor.
        may = num2
        num2 = num3
        num3 = may
    Fin Si
	
    Escribir "Los números de menor a mayor son:"
    Escribir num1
	Escribir num2
	Escribir num3	
	
FinProceso
