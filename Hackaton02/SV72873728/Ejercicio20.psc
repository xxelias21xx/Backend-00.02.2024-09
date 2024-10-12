Proceso Ejercicio20
	
	Definir num1, num2, num3, num4 Como Entero
	
	Escribir "Ingrese Primer Número entero positivo"
	Leer num1
	Mientras num1 < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese Primer Número entero positivo"
		Leer num1
	Fin Mientras
	
	Escribir "Ingrese Segundo Número entero positivo"
	Leer num2
	Mientras num2 < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese Segundo Número entero positivo"
		Leer num2
	Fin Mientras
	
	Escribir "Ingrese Tercer Número entero positivo"
	Leer num3
	Mientras num3 < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese Tercer Número entero positivo"
		Leer num3
	Fin Mientras

	Escribir "Ingrese Cuarto Número entero positivo"
	Leer num4
	Mientras num4 < 0 Hacer
		Escribir "Número no valido"
		Escribir "Ingrese Cuarto Número entero positivo"
		Leer num4
	Fin Mientras
	
	// -----------------Cantidad de números pares-------------------------
	pares = 0
	
	Si (num1 mod 2) = 0 Entonces
		pares = pares + 1
	FinSi
	
	Si (num2 mod 2) = 0 Entonces
		pares = pares + 1
	FinSi
	
	Si (num3 mod 2) = 0 Entonces
		pares = pares + 1
	FinSi
	
	Si (num4 mod 2) = 0 Entonces
		pares = pares + 1
	FinSi
	
	Escribir "Hay ", pares, " números pares"
	
	// -----------------Mayor de todos-------------------------
		mayor = num1
	
	Si mayor < num2 Entonces
		
		mayor = num2
		
	FinSi
	
	Si mayor < num3 Entonces
		
		mayor = num3
		
	FinSi
	
	Si mayor < num4 Entonces
		
		mayor = num4
		
	FinSi
	
	Escribir "El número mayor es: ", mayor
	
	// -----------------Si el tercero es par, calcular el cuadrado del segundo.-------------------------
	
	Si (num3 mod 2) = 0 Entonces
		cuadrado = num2 * num2
		Escribir "El tercero es par y el cuadrado del segundo es: ", cuadrado
	SiNo
		Escribir "El tercero no es par"
	FinSi
	

	
	// -----------------Si el primero es menor que el cuarto, calcular la media de los 4 números-------------------------
	
	
	Si num1 < num4 Entonces
		
		media = (num1 + num2 + num3 + num4) / 4
		
		Escribir "El primero es menor que el cuarto número. La media es: ", media
	SiNo
		Escribir "El primero no es menor que el cuarto"		
	FinSi
	
	
	// -----------------    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
	//-------------------   Si cumple se cumple la segunda condición, calcular la suma de los 4 números.      ------------------------
	
	Si num2 > num3 Entonces
		
		si num3 <= 700 y num3 >= 50
			
			suma = num1 + num2 + num3 + num4
			Escribir "El segundo es mayor que el tercero y el tercero se encuentra entre 50 y 700. La suma de los 4 nuemros es: ", suma
			
		SiNo
			Escribir "El tercer número no esta entre 50 y 700"
		FinSi
	SiNo
		escribir "El segundo número no es mayor que el tercero"
	FinSi
	
	
FinProceso
