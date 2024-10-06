Proceso E4
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor
	
	Definir num1, num2, num3 Como Entero
    Definir menor, medio, mayor Como Entero
	
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
    Escribir "Ingrese el tercer número: "
    Leer num3
	
    Si num1 < num2 Entonces
        Si num1 < num3 Entonces
            menor = num1
            Si num2 < num3 Entonces
                medio = num2
                mayor = num3
            Sino
                medio = num3
                mayor = num2
            FinSi
        Sino
            menor = num3
            medio = num1
            mayor = num2
        FinSi
    Sino
        Si num2 < num3 Entonces
            menor = num2
            Si num1 < num3 Entonces
                medio = num1
                mayor = num3
            Sino
                medio = num3
                mayor = num1
            FinSi
        Sino
            menor = num3
            medio = num2
            mayor = num1
        FinSi
    FinSi
	Escribir "los numeros en orden son:"
	Escribir menor
	Escribir medio
	Escribir mayor 
FinProceso
