Proceso MayorDeDosNumeros
    Definir num1, num2 Como Real
    Definir mayor Como Real
	
    // Solicitar al usuario la entrada de los números
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
	
    // Determinar el mayor de los dos números
    Si num1 > num2 Entonces
        mayor <- num1 // num1 es el mayor
    Sino
        mayor <- num2 // num2 es el mayor
    FinSi
	
    // Mostrar el mayor número
    Escribir "El mayor número es: ", mayor
FinProceso
