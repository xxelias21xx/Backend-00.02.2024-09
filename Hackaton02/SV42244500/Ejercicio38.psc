//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Ejercicio38
	
	Definir numero, sumaDivisores, i Como Entero
	Escribir "Ingrese un numero para verificar si es perfecto"
	Leer numero
	
	sumaDivisores = 0
	
	para i <- 1 Hasta numero - 1 Con Paso 1 Hacer
		si numero %i = 0 Entonces
			sumaDivisores = sumaDivisores + 1
		FinSi
	FinPara
	
	si sumaDivisores = numero Entonces
		Escribir "El numero ", numero " es perfecto "
	SiNo
		Escribir  "El numero ", numero " no es perfecto "
	FinSi
	
FinProceso
