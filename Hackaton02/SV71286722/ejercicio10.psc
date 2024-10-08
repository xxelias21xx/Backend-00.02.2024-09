Proceso ParOImpar
    Definir numero Como Entero
	
    // Solicitar al usuario que ingrese un número
    Escribir "Ingrese un número: "
    Leer numero
	
    // Determinar si el número es par o impar
    Si numero % 2 = 0 Entonces
        Escribir "El número ", numero, " es par."
    Sino
        Escribir "El número ", numero, " es impar."
    FinSi
FinProceso
