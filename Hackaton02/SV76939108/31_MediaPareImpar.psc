Algoritmo MediaPareImpar
	Definir num Como Entero
	sumaPar<-0
	sumaImp<-0
	contP<-0
	contI<-0
	Para i Desde 1 Hasta 10 Hacer
		Escribir "Ingrese un número: "
		Leer num
		Si num%2=0 Entonces
			sumaPar<-sumaPar+num
			contP<-contP +1
		SiNo
			sumaImp<-sumaImp+num
			contI<-contI+1
		FinSi
	FinPara
	Si contP>0 Entonces
		mediaPar<-sumaPar/contP
		Escribir "La media de los pares es: ", mediaPar
	SiNo
		Escribir "No hay números pares."
	FinSi
	Si contI>0 Entonces
		mediaImp<-sumaImp/contI
		Escribir "La media de los pares es: ", mediaImp
	SiNo
		Escribir "No hay números impares."
	FinSi
FinAlgoritmo
