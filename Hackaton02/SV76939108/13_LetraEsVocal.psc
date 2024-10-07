Algoritmo LetraEsVocal
	Definir letra Como Caracter
	Escribir "Ingrese una letra: "
	Leer letra
	letra<-Minusculas(letra)
	Si letra='a' o letra='e' o letra='i' o letra='o' o letra='u' Entonces
		Escribir "La letra ingresada es vocal."
	SiNo
		Escribir "La letra ingresada NO es una vocal."
	FinSi
FinAlgoritmo
