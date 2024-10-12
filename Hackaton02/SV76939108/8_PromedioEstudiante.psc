Algoritmo PromedioEstudiante
	Definir nota1, nota2, nota3 Como Real
	Escribir "Ingresar las 3 notas: "
	Leer nota1, nota2, nota3
	promedio<-(nota1+nota2+nota3)/3
	Si nota1>=0 y nota1<=20 y nota2>=0 y nota2<=20 y nota3>=0 y nota3<=20 Entonces
		Si promedio>=11 y promedio<=20 Entonces
			Escribir "El promedio es: ", promedio
			Escribir "El estudiante aprobó."
		SiNo
			Escribir "El promedio es: ", promedio
			Escribir "El estudiante NO aprobó."
		FinSi
	SiNo
		Escribir "Algún valor incorrecto"
	FinSi
FinAlgoritmo
