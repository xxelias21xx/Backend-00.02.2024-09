Algoritmo Ejercicio03
	//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
	definir dato,ultimoDigito como entero
	Escribir 'Escribe un numero, Alumnito:'
	Leer dato
	ultimoDigito = dato mod 20
	// Verificar si el último dígito es 4
    Si (ultimoDigito = 4) Entonces
      Escribir "El número termina en 4."
	Sino
		Escribir "No has ingresado un número válido."
     FinSi
FinAlgoritmo
