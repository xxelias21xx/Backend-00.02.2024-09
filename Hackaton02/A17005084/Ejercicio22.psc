//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso SumaNumero
	
	Escribir "Ingrese cantidad de numeros a sumar:"
	Leer NumeReco
	
	Si NumeReco<=0 Entonces
		Escribir "Numero ingresado debe ser mayor a 0"
	SiNo
		Definir  TotSuma,Inic Como Entero
		TotSuma=0
		Para Inic<-1 Hasta NumeReco Con Paso 1 Hacer
			TotSuma=TotSuma+Inic
		Fin Para
		Escribir  "La suma de los numero es: ", TotSuma
	Fin Si
FinProceso
