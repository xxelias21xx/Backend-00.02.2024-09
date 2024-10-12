Proceso MayorDeTresNumeros
    Definir num1, num2, num3 Como Real
    Definir mayor Como Real
	
    // Solicitar al usuario la entrada de los números
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
    Escribir "Ingrese el tercer número: "
    Leer num3
	
    // Determinar el mayor de los tres números
    mayor <- num1 // Asumir que el primer número es el mayor
	
    Si num2 > mayor Entonces
        mayor <- num2 // Actualizar si el segundo número es mayor
    FinSi
	
    Si num3 > mayor Entonces
        mayor <- num3 // Actualizar si el tercer número es mayor
    FinSi
	
    // Mostrar el mayor número
    Escribir "El mayor número es: ", mayor
FinProceso
