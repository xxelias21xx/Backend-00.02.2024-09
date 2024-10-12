Proceso ContinuarPrograma
    Definir continuar Como Caracter
    continuar <- "S"
	
    // Ciclo para permitir que el usuario decida si quiere continuar
    Mientras continuar = "S" O continuar = "s" Hacer
        // Aquí va el bloque del programa que se repetirá
        Escribir "Ejecutando el programa..."
		
        // Preguntar al usuario si desea continuar
        Escribir "¿Desea continuar con el programa? (S/N): "
        Leer continuar
		
        // Verificar si el usuario ingresó una opción válida
        Si continuar <> "S" Y continuar <> "s" Y continuar <> "N" Y continuar <> "n" Entonces
            Escribir "Opción no válida. Ingrese S para continuar o N para salir."
            Leer continuar
        Fin Si
    Fin Mientras
	
    Escribir "El programa ha finalizado."
Fin Proceso
