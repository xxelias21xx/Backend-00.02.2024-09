Algoritmo MediaNumerosLista
	Definir num, suma, cont Como Real
	Repetir
		Escribir "Ingrese un número positivo: "
		Leer num
		Si num>=0 Entonces
			suma<-suma+num
			cont<-cont+1
		FinSi
	Hasta Que num<0
	Si cont>0 Entonces
		Escribir "La media de los números ingresados es: ", suma/cont
	SiNo
		Escribir "No se ingresaron números positivos"
	FinSi
FinAlgoritmo
