//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.
Proceso MediaListaNumeros
	Definir NroIngre,Conta,SumNro Como Entero
	definir MedSum Como Real
	Conta=0
	Repetir
		Escribir  "Ingrese numeros, para terminar el ingreso, coloque un numero negativo"
		Leer NroIngre
		si NroIngre>0
			Conta=Conta+1
			SumNro=SumNro + NroIngre
		FinSi
	Hasta Que NroIngre<0
	si Conta<=0
		Escribir "No se han ingresado numeros positivos"
	SiNo
		MedSum=SumNro/Conta
		Escribir "La media de los numeros ingresados es: " , MedSum
	FinSi	
FinProceso
