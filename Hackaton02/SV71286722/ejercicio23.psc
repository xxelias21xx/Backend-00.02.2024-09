Proceso SumarImparesMenoresIgualesAn
    Definir numero, suma Como Entero
	
    // Leer el valor de n
    Escribir "Ingrese un número entero positivo n: "
    Leer numero
	
    // Inicializar la suma
    suma <- 0
	
    // Calcular la suma de los números impares menores o iguales a n
    Para i Desde 1 Hasta numero Hacer
        Si i % 2 <> 0 Entonces // Verificar si el número es impar
            suma <- suma + i
        Fin Si
    Fin Para
	
    // Mostrar el resultado
    Escribir "La suma de los números impares menores o iguales a ", numero, " es: ", suma
Fin Proceso
