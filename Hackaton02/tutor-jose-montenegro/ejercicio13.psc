
//Algoritmo  determinarVocal
//	definir letra Como Caracter
//	Escribir  "Ingrese una letra"
//	Leer  letra
//	
//	letra = Minusculas(letra)
//	
//	si letra='a' o letra='e' o letra='i' o letra='o' o letra='u' Entonces
//		Escribir  "La letra es una vocal"
//	SiNo
//		Escribir  "La letra no es una vocal"
//	FinSi
//	
//	
//	
//FinAlgoritmo


Algoritmo  determinarVocal
	
	definir letra Como Caracter
	Escribir  "Ingrese una letra"
	Leer  letra
	
	letra = Minusculas(letra)
	
	Segun  letra Hacer
		caso "a": 
			Escribir  "La letra es una vocal"
		caso 'e':
			Escribir  "La letra es una vocal"
		caso 'i':
			Escribir  "La letra es una vocal"
		caso 'o':
			Escribir  "La letra es una vocal"
		caso 'u':
			Escribir  "La letra es una vocal"
		De Otro Modo:
			Escribir  "La letra no es una vocal"
	FinSegun
	
FinAlgoritmo


