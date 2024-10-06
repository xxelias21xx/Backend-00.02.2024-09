Proceso Ejercicio04
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	definir num1, num2,num3 como numero
	Escribir "Escribe el número 1 "
	leer num1
	Escribir "Escribe el número 2 "
	leer num2
	Escribir "Escribe el número 3 "
	leer num3
	
	
	Si num1 <= num2 Y num1 <= num3 Entonces
        Si num2 <= num3 Entonces
            Escribir num1, num2, num3
        Sino
            Escribir num1, num3, num2
        FinSi
    Sino
        Si num2 <= num1 Y num2 <= num3 Entonces
            Si num1 <= num3 Entonces
                Escribir num2, num1, num3
            Sino
                Escribir num2, num3, num1
            FinSi
        Sino
            Si num3 <= num1 Y num3 <= num2 Entonces
                Si num1 <= num2 Entonces
                    Escribir num3, num1, num2
                Sino
                    Escribir num3, num2, num1
                FinSi
            FinSi
        FinSi
    FinSi

FinProceso
