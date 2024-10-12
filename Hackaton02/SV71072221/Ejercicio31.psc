// 31. Hacer un algoritmo en Pseint parar calcular la media de los 
// números pares e impares, sólo se ingresará diez números.
Proceso Ejercicio31
	Dimension datos(10)
	definir i, sumaPar, sumaImpar, contPar, contImpar Como Entero
	sumaPar = 0
	sumaImpar = 0
	contPar = 0
	contImpar = 0
	Para i <- 1 Hasta 10 Hacer
		Escribir "Ingrese el N", i, ":"
		Leer datos(i)
		Si datos(i) mod 2 = 0 Entonces
			sumaPar = sumaPar + datos(i)
			contPar = contPar + 1
		SiNo
			sumaImpar = sumaImpar + datos(i)
			contImpar = contImpar + 1
		FinSi
	FinPara
	Escribir "La media de los numeros pares es ", sumaPar/contPar, "."
	Escribir "La media de los numeros impares es ", sumaImpar/contImpar, "."
FinProceso
