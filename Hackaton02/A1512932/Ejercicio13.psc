Algoritmo ejercicio13
	
	//13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	Definir letra Como Cadena
	Escribir "Alumnito, escribe una letra para saber si es un vocal o consonantes"
	Leer letra
	
    // Verificar que solo se ingrese un carácter
	Si Longitud(letra)=1 Entonces
		Si (letra = "a" o letra = "e" o letra = "i" o letra = "o" o letra = "u" o letra = "A" o letra = "E" o letra = "I" o letra = "O" o letra = "U") Entonces
            Escribir "Alumnito, has escrito una vocal"
			SiNo
			Escribir 'Ups,ha escrito una consonante'
		FinSi
	SiNo
		Si Longitud(letra)>=2 Entonces
			Escribir 'Ups, has escrito mas de 2 caracteres,numeros o letritas'
		FinSi
	FinSi
FinAlgoritmo
