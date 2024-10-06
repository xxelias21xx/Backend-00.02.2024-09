Proceso VerificarVocal
    Definir letra Como Caracter
	
    // Solicitar al usuario que ingrese una letra
    Escribir "Ingrese una letra: "
    Leer letra
	
    // Convertir la letra a minúscula para simplificar la comparación
    letra <- Minusculas(letra)
	
    // Determinar si la letra es una vocal
    Si letra = 'a' O letra = 'e' O letra = 'i' O letra = 'o' O letra = 'u' Entonces
        Escribir "La letra ", letra, " es una vocal."
    Sino
        Escribir "La letra ", letra, " no es una vocal."
    FinSi
FinProceso
