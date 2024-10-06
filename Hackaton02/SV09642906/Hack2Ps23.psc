Proceso E23
	//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
	Definir n Como Entero
    Definir suma Como Entero
    Definir i Como Entero
	
    // Leer el valor de n
    Escribir "Ingresa un número entero positivo n:"
    Leer n
	
    // Validar que n sea positivo
    Si n < 1 Entonces
        Escribir "Por favor, ingresa un número entero positivo."
    Sino
        // Inicializar la suma
        suma <- 0
		
        // Calcular la suma de los números impares menores o iguales a n
        Para i <- 1 Hasta n Hacer
            Si i % 2 <> 0 Entonces // Verifica si i es impar
                suma <- suma + i
            Fin Si
        Fin Para
		
        // Mostrar el resultado
        Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    Fin Si
Fin Proceso		