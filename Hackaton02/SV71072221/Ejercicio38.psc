// 38. Hacer un algoritmo en Pseint que nos permita saber si
// un número es un número perfecto.
Proceso Ejercicio38
	definir num, sumaDivisor, i Como Entero
	Escribir "Ingrese un numero para evaluar si es perfecto"
	leer num
	sumaDivisor = 0
	para i <- 1 hasta num - 1 con paso 1 Hacer
		si num % i =0 Entonces
			sumaDivisor = sumaDivisor + i
		FinSi
	FinPara
	si sumaDivisor = num Entonces
		Escribir  "el numero ",num " es perfecto"
	SiNo
		Escribir  "el numero ",num " no es perfecto"
	FinSi
FinProceso
