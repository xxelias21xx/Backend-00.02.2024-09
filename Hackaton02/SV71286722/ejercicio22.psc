Proceso SumarNPrimerosNumeros
    Definir numero, suma Como Entero
	
    // Leer el valor de n
    Escribir "Ingrese un número entero positivo n: "
    Leer numero
	
    // Inicializar la suma
    suma <- 0
	
    // Calcular la suma de los primeros n números
    Para i Desde 1 Hasta numero Hacer
        suma <- suma + i
    Fin Para
	
    // Mostrar el resultado
    Escribir "La suma de los primeros ", numero, " números es: ", suma
Fin Proceso
