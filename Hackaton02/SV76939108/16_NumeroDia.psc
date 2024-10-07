Algoritmo NumeroDia
	Definir NumS Como Entero
	Escribir "Ingrese un número del 1-7: "
	Leer NumS
	Si NumS>=1 y NumS<=7 Entonces
		Si NumS=1 Entonces
			Escribir "Lunes"
		SiNo
			Si NumS=2 Entonces
				Escribir "Martes"
			SiNo
				Si NumS=3 Entonces
					Escribir "Miércoles"
				SiNo
					Si NumS=4 Entonces
						Escribir "Jueves"
					SiNo
						Si NumS=5 Entonces
							Escribir "Viernes"
						SiNo
							Si NumS=6 Entonces
								Escribir "Sábado"
							SiNo
								Escribir "Viernes"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	SiNo
		Escribir "Número inválido. Debes ingresar un número entre 1 y 7."
	FinSi
FinAlgoritmo
