Algoritmo Ejercicio01
	//1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
	Definir entrada Como Cadena
	Escribir 'Escribe 3 numeros, Alumnito:'
	Leer entrada
	// Verificar la longitud de la entrada
	Si Longitud(entrada)=1 Entonces
		Si (entrada>='A' Y entrada<='Z') O (entrada>='a' Y entrada<='z') Entonces
			Escribir 'Ups, has escrito 1 letrita'
		SiNo
			Escribir 'Ups,has escrito solo 1 numerito'
		FinSi
	SiNo
		Si Longitud(entrada)=2 Entonces
			Si (entrada>='AA' Y entrada<='ZZ') O (entrada>='aa' Y entrada<='zz') Entonces
				Escribir 'Ups, has escrito 2 letritas'
			SiNo
				Escribir 'Ups,has escrito solo 2 numeritos'
			FinSi
		SiNo
			Si Longitud(entrada)>=4 Entonces
				Escribir 'Ups, has escrito mas de 4 caracteres,numeros o letritas'
			FinSi
		FinSi
	FinSi
	Si Longitud(entrada)=3 Entonces
		numero = ConvertirANumero(entrada)
		Si (numero>=100 Y numero<=999) O (numero<=-100 Y numero>=-999) Entonces
			Escribir 'Felicitaciones!, Has escrito 3 numeros'
		SiNo
			Escribir 'Ups,no has escrito tres letritas'
		FinSi
	FinSi
FinAlgoritmo
