Proceso EJERCICI22
	//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
	
	Definir n, suma Como Entero
	
    // Solicitar al usuario el valor de n
    Escribir "Ingrese un número entero positivo (n): "
    Leer n
	
    // Inicializar la suma
    suma <- 0
	
    // Calcular la suma de los n primeros números
    Para i Desde 1 Hasta n Hacer
        suma <- suma + i
    FinPara
	
    // Mostrar el resultado
    Escribir "La suma de los primeros ", n, " números es: ", suma

	
FinProceso
