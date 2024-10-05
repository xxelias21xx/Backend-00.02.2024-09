Proceso Ejercicio04
	//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir num1 Como Entero
	Definir num2 Como Entero
	Definir num3 Como Entero
	
	Escribir "Ingrese Primer Número"
	Leer num1
	Escribir "Ingrese Segundo Número"
	Leer num2
	Escribir "Ingrese Tercer Número"
	Leer num3
	
    Si num1 > num2 Entonces
        may = num1
        num1 = num2
        num2 = may
    Fin Si
	
    Si num1 > num3 Entonces
        may = num1
        num1 = num3
        num3 = may
    Fin Si
	
    Si num2 > num3 Entonces
        may = num2
        num2 = num3
        num3 = may
    Fin Si
	
    Escribir "Los números de menor a mayor son:"
    Escribir num1
	Escribir num2
	Escribir num3	
	
FinProceso
