Proceso VerificarTresDigitos
    Definir numero Como Entero
    Escribir "Ingrese un número: "
    Leer numero
	
    // Convertimos el número en su valor absoluto por si es negativo
    numero <- Abs(numero)
	
    // Verificamos si tiene tres dígitos
    Si numero >= 100 Y numero <= 999 Entonces
        Escribir "El número tiene tres dígitos."
    Sino
        Escribir "El número no tiene tres dígitos."
    FinSi
FinProceso
