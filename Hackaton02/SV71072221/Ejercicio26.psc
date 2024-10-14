// 26. Hacer un algoritmo en Pseint para calcular el resto
// y cociente por medio de restas sucesivas.
Proceso Ejercicio26
	Definir n1, n2, resto, cociente Como Entero
	Escribir "Ingrese el Numerador"
	leer n1
	Escribir "Ingrese el Denominador"
	leer n2
	resto = 0
	cociente = 0
	Mientras n1 > n2
		n1 = n1 - n2
		resto = n1
		cociente = cociente + 1
	FinMientras
	Escribir "Para la operacion de division de ", n1, "/", n2, " es de ", n1/n2, " con un cociente de ", cociente, " y un residuo de ", resto, "."
FinProceso
