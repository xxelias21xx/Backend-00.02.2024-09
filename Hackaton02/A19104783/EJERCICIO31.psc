Proceso ejercicio31
	//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	
	
	
	Para i=1 Hasta 10 Hacer
		Escribir "ingresa numero"
		leer num
		
		
		Si num%2==0 Entonces

			sumapares=sumapares+num
			contadorespares=contadorespares+1
		SiNo
			sumaimpares=sumaimpares+num
			contadoresimpares=contadorespares+1
		Fin Si
		
		
		
	Fin Para
	
	//calcular media
	
	Si contadorespares>0 Entonces
		Escribir "esta es la media de los numeros pares: ",sumapares/contadorespares
	SiNo
		Escribir "no hay numeros pares"
	Fin Si

	Si contadoresimpares>0 Entonces
		Escribir "la media de impares es: ", sumaimpares/contadoresimpares
	SiNo
		Escribir "no hay numeros impares"
	Fin Si
	
	
	
	
	
FinProceso
