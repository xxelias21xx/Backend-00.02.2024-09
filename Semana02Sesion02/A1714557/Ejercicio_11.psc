//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Mayor_De_3
	Definir num1,num2,num3,numM Como Real
	Escribir "Introducir primer numero: "
	leer num1
	Escribir "Introducir segundo numero: "
	leer num2
	Escribir "Introducir tercer numero: "
	leer num3
	
	si num1>num2 y num1>num3 Entonces
		numM= num1
	SiNo
		si num2>num1 y num2>num3 entonces
			numM= num2
		SiNo
			numM= num3
		FinSi
	FinSi
	Escribir "El numero mayor es: ", numM
FinProceso
