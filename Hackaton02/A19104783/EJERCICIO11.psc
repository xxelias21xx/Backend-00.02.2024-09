Proceso numMayor
	//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Definir num1, num2, num3, mayor Como Entero
	
    // Solicitar los tres números
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
    Escribir "Ingrese el tercer número: "
    Leer num3 
	
	
    // Encontrar el mayor número
    Si num1 >= num2 Y num1 >= num3 Entonces
        mayor <- num1
    SiNo
        Si num2 >= num1 Y num2 >= num3 Entonces
            mayor <- num2
        SiNo
            mayor <- num3
        FinSi
    FinSi
	
	
    // Mostrar el resultado
    Escribir "El número mayor es: ", mayor
	
FinProceso
