//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso SaliPrograma
	
	Definir UsuActi Como Logico
	UsuActi=Verdadero
	
	Mientras UsuActi=Verdadero Hacer
		Escribir "Desea continuar en el programa? S/N: "
		Leer Resp
		Resp=Mayusculas(Resp)
		Si Resp<>"N" y Resp<>"S" Entonces
			Escribir "Opcion ingresada es incorrecta"
		SiNo
			Si Resp="N" Entonces
				UsuActi=Falso
			FinSi
		FinSi
	Fin Mientras
	
FinProceso
