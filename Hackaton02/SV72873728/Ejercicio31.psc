Proceso Ejercicio31
	
	Suma_par = 0
	Suma_impar = 0
	contador_par = 0
	contado_impar = 0
	media_impar = 0
	media_par = 0
	i = 0
	
	Para i<-1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese número"
		Leer num
		
		Si num mod 2 = 0 Entonces
			Suma_par = Suma_par + num
			contador_par = contador_par + 1
		SiNo
			Suma_impar = suma_impar + num
			contador_impar = contador_impar + 1
		FinSi
		
	Fin Para
	
	Si contador_par = 0 Entonces
		escribir "No hay numeros pares"
	SiNo
		media_par = suma_par / contador_par
		escribir "La media de los números pares es: ", media_par
	FinSi
	
	si contador_impar = 0 Entonces
		escribir "No hay número impares"
	SiNo
		media_impar = suma_impar / contador_impar
		escribir "La media de los números impares es: ", media_impar
	FinSi
	
FinProceso
