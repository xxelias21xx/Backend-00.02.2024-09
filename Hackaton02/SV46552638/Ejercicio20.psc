Proceso Ejercicio20
	//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	
    //¿Cuántos números son Pares?
	
    //¿Cuál es el mayor de todos?
	
    //Si el tercero es par, calcular el cuadrado del segundo.
		
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
			
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
	//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Dimension enterosPositivos[4]
	elMayor=0
	contadorPares=0
	acumulador=0.0
	Para i<-1 Hasta 4 Con Paso paso Hacer
		Escribir "Ingrese  ",i,"°: [positivo]"
		Repetir
			Leer num
		Hasta Que (num>0)
		enterosPositivos[i] = num
		Si num MOD 2 == 0 Entonces
			contadorPares = contadorPares+1
		Fin Si
		Si num > elMayor Entonces
			elMayor=num
		Fin Si
		acumulador=acumulador+num
		Limpiar Pantalla
		i=i+1
	Fin Para
	Para i<-1 Hasta 4 Con Paso paso Hacer
		Escribir  enterosPositivos[i]
		i=i+1
	Fin Para
	
	Escribir "Cantidad de numeros pares: ", contadorPares
	
	Escribir "El numero mayor es: ",elMayor
	
	Si enterosPositivos[3] MOD 2 == 0 Entonces
		Escribir enterosPositivos[2] "al cuadrado: ", enterosPositivos[2]^2
	Fin Si
	
	Si enterosPositivos[1] < enterosPositivos[4]Entonces
		Escribir "El Promedio es: ", acumulador/4
		Escribir "La suma de todos los numeros es: ",acumulador
	Fin Si
	
	Si enterosPositivos[2] > enterosPositivos[3]Entonces
		Si (enterosPositivos[3] >50 y enterosPositivos[3]<700) Entonces
			Escribir enterosPositivos[3], " Esta comprendido entre los valores 50 y 700."
		Fin Si
	Fin Si
	
FinProceso
