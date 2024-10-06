Proceso VerificarSiTerminaEnCuatro
    Definir numero Como Entero
    Definir ultimo_digito Como Entero
    Escribir "Ingrese un número: "
    Leer numero
	
    // Obtenemos el último dígito del número
    ultimo_digito <- numero % 10
	
    // Verificamos si el último dígito es 4
    Si ultimo_digito = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número no termina en 4."
    FinSi
FinProceso
