Proceso AproximacionPi
    Definir n, i Como Entero
    Definir numpi, signo Como Real
	
    // Inicializar pi y el signo
    numpi <- 0
    signo <- 1
	
    // Leer el número de términos a utilizar en la aproximación
    Escribir "Ingrese el número de términos para la aproximación de Pi:"
    Leer n
	
    // Calcular la aproximación de Pi
    Para i <- 0 Hasta n - 1 Con Paso 1 Hacer
        numpi <- numpi + signo * (4 / (2 * i + 1))
        signo <- -signo // Cambiar el signo
    Fin Para
	
    // Mostrar el resultado
    Escribir "La aproximación de Pi es: ", numpi
Fin Proceso
