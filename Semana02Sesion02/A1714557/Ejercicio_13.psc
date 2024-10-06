// 13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso determinarVocal
	Definir letra Como Cadena
	Escribir 'Ingresa un caracter: '
	Leer letra
	letra <- Minusculas(letra)
	Según letra Hacer
		'a':
			Escribir 'La letra es una vocal.'
		'e':
			Escribir 'La letra es una vocal.'
		'i':
			Escribir 'La letra es una vocal.'
		'o':
			Escribir 'La letra es una vocal.'
		'u':
			Escribir 'La letra es una vocal.'
		De Otro Modo:
			Escribir 'La letra no es una vocal.'
	FinSegún
FinProceso
