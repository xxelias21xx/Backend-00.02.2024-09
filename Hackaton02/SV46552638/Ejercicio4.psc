Proceso Ejercicio4
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Escribir "Ingrese primer numero: "
	Leer elMayor
	Escribir "Ingrese segundo numero: "
	Leer elMenor
	Escribir "Ingrese tercer numero: "
	Leer elMediano
	
	Escribir  "prueba 1 condicionales simples: "
	Si elMayor <= elMenor  Entonces
		Auxiliar = elMayor
		elMayor=elMenor
		elMenor=Auxiliar
	Fin si
	
	Si elMayor <= elMediano  Entonces
		Auxiliar = elMayor
		elMayor=elMediano
		elMediano=Auxiliar
	Fin si
	
	Si elMediano <= elMenor  Entonces
		Auxiliar = elMediano
		elMediano=elMenor
		elMenor=Auxiliar
	Fin si
	Escribir elMayor, " ", elMediano," ", elMenor
	
	Escribir "Prueba 2 condicionales anidadas"
	
	Si elMayor <= elMenor  Entonces
		Auxiliar = elMayor
		elMayor=elMenor
		elMenor=Auxiliar
	SiNo
		Si  elMayor <= elMediano Entonces
			Auxiliar = elMediano
			elMayor=elMediano
			elMediano=Auxiliar
		SiNo
			Si elMediano <= elMenor Entonces
				Auxiliar = elMediano
				elMediano=elMenor
				elMenor=Auxiliar
			Fin si
		Fin Si
	Fin Si
	Escribir elMayor, " ", elMediano," ", elMenor
	
FinProceso
