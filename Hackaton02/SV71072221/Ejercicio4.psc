// 4. Hacer un algoritmo en Pseint que lea tres números 
// enteros y los muestre de menor a mayor.
Proceso Ejercicio4
	Definir Numero1, Numero2, Numero3,mayornumero, menornumero, medionumero Como Entero
	Escribir "Ingrese el primer numero"
	Leer Numero1
	Escribir "Ingrese el segundo numero"
	Leer Numero2
	Escribir "Ingrese el tercer numero"
	Leer Numero3
	
	Si (Numero1 > Numero2) y (Numero1 > Numero3) Entonces
		mayornumero = Numero1
		Si(Numero2 > Numero3) Entonces
			medionumero = Numero2
			menornumero = Numero3
		FinSi
	FinSi
	Si (Numero2 > Numero1) y (Numero2 > Numero3) Entonces
		mayornumero = Numero2
		Si(Numero1 > Numero3) Entonces
			medionumero = Numero1
			menornumero = Numero3
		FinSi
	FinSi
	Si (Numero3 > Numero1) y (Numero3 > Numero2) Entonces
		mayornumero = Numero3
		Si(Numero1 > Numero2) Entonces
			medionumero = Numero1
			menornumero = Numero2
		FinSi
	FinSi
	Escribir "El mayor numero es ", mayornumero, "."
	Escribir "El numero del medio es ", medionumero, "."
	Escribir "El menor numero es ", menornumero, "."
	
FinProceso
