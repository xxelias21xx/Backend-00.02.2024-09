Algoritmo Ejercicio31
	//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.	
	Definir num como Entero
	
	num=10
	sumPares = 0
	sumImpares = 0
	contaPar = 0
	contaImp = 0
	
	//Numeros Pares
	Para i desde 1 hasta num Hacer
		si i <= num Entonces
			si i mod 2 = 0 Entonces
				sumPares = sumPares + i
				contaPar = contaPar + 1
			finsi	
		FinSi
	FinPara
	
	//Numeros Impares
	Para i desde 1 hasta num Hacer
		si i <= num Entonces
			si i mod 2 <> 0 Entonces
				sumImpares = sumImpares + i
				contaImp = contaImp +1
			finsi
		FinSi
	FinPara
	
	Escribir "La media de los Numeros Pares: ", sumPares/contaPar
	Escribir "La media de los Numeros Pares: ", sumImpares/contaImp
	
FinAlgoritmo

