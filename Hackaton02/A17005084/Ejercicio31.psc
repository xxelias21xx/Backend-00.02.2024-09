//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso MediaNroParImpar
	
	Definir CantPar,CantImp,SumPar,SumImp,MedPar,MedImp como entero
	CantPar=0
	CantImp=0
	SumPar=0
	SumImp=0
	Para Cont<-1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese valor de Nro " , Cont
		Leer NroIng
		
		Si NroIng % 2=0 Entonces
			CantPar=CantPar+1
			SumPar=SumPar+NroIng
		FinSi
		Si NroIng % 2<>0 Entonces
			CantImp=CantImp+1
			SumImp=SumImp+NroIng
		FinSi
	Fin Para
	si CantPar=0 Entonces
		Escribir "No se han ingresado numeros pares"
	SiNo
		Escribir "La media de los numero pares es: " , SumPar/CantPar
	FinSi
	si CantImp=0 Entonces
		Escribir "No se han ingresado numeros impares"
	SiNo
		Escribir "La media de los numero impares es: " , SumImp/CantImp
	FinSi
	
FinProceso
