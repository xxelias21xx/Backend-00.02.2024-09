Proceso AproximacionPiNilakantha
    Definir n, i Como Entero
    Definir numpi, signo Como Real
    Definir denominador Como Real
	
    // Inicializar pi y el signo
    numpi <- 3
    signo <- 1
	
    // Leer el número de términos a utilizar en la aproximación
    Escribir "Ingrese el número de términos para la aproximación de Pi:"
    Leer n
	
    // Calcular la aproximación de Pi
    Para i <- 1 Hasta n Con Paso 1 Hacer
        denominador <- (2 * i) * (2 * i + 1) * (2 * i + 2) // Calcula el denominador
        numpi <- numpi + signo * (4 / denominador) // Suma o resta el término
        signo <- -signo // Cambiar el signo para la próxima iteración
    Fin Para
	
    // Mostrar el resultado
    Escribir "La aproximación de Pi es: ", numpi
Fin Proceso
