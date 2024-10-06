Proceso Ejercicio31
	//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	acumuladorPares=0
	contadorPares=0
	promedioPares=0.0
	
	acumuladorImpares=0
	contadorImpares=0
	promedioImpares=0.0
	
	num=0
	Para i=1 Hasta 10 Con Paso paso Hacer
		Escribir "Los numeros a ingresar deben ser positivo [mayores a 0]"
		Repetir
			Escribir "Ingrese ",i,"° numero:"
			Leer num
			Limpiar Pantalla
		Hasta Que num>0
		
		Si num MOD 2 ==0 Entonces
			acumuladorPares= acumuladorPares+ num
			contadorPares=contadorPares+1
		SiNo
			acumuladorImpares= acumuladorImpares+ num
			contadorImpares=contadorImpares+1
		Fin Si
//		Escribir "suma pares: ",acumuladorPares
//		Escribir "contador pares: ",contadorPares
//		Escribir "suma impares: ",acumuladorImpares
//		Escribir "suma impares: ",contadorImpares
		i=i+1
	Fin Para
	
	Si contadorPares <>0 Entonces
		Escribir "Promedio de numeros Pares: ", acumuladorPares/contadorPares
	SiNo
		Escribir "No hay numeros Pares"
	Fin Si
	
	Si contadorImpares <>0 Entonces
		Escribir "Promedio de numeros Impares: ", acumuladorImpares/contadorImpares
	SiNo
		Escribir "No hay numeros Imares"
	Fin Si
	
FinProceso
