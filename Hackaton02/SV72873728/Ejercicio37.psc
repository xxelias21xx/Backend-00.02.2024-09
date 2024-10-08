Proceso Ejercicio37
	
	Escribir "Ingrese primer número mayor a cero"
	Leer num1
	Mientras num1 < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese primer número mayor a cero"
		Leer num1
	Fin Mientras
	
	Escribir "Ingrese segundo número mayor a cero y menor al primer número"
	Leer num2
	Mientras  num2 > num1 o num2 < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese segundo número mayor a cero y menor al primer número"
		Leer num2
	Fin Mientras
	
	
	Mientras num2 <> 0 Hacer
		residuo = num1 mod num2
		num1 = num2
		num2 = residuo
	Fin Mientras
	
	Escribir "El MCD es: ", num1
	
FinProceso
