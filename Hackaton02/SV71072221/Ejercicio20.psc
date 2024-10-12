// 20. Hacer un algoritmo en Pseint que que lea 4 números
// enteros positivos y verifique y realice las siguientes 
// operaciones:

//     ¿Cuántos números son Pares?
//     ¿Cuál es el mayor de todos?
//     Si el tercero es par, calcular el cuadrado del segundo.
//     Si el primero es menor que el cuarto, calcular la media de los 4 números.
//     Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido 
//     entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular 
//     la suma de los 4 números.
Proceso Ejercicio20
	Dimension datos(4)
	Definir i, pares, mayorNum, nuevoMayor, sumanum Como Entero
	Definir promedio Como Real
	Escribir "Ingrese 4 datos para la evaluacion"
	Escribir "Ingrese el primer dato: "
	leer datos(1)
	Escribir "Ingrese el segundo dato: "
	leer datos(2)
	Escribir "Ingrese el tercer dato: "
	leer datos(3)
	Escribir "Ingrese el cuarto dato: "
	leer datos(4)
	i = 1
	pares = 0
	sumanum = datos(1)+datos(2)+datos(3)+datos(4)
	Mientras i <= 4 Hacer
		//¿Cuántos números son Pares?
		Si (datos(i) mod 2 = 0) y (datos(i) <> 0) Entonces
			pares = pares + 1
		FinSi
		//¿Cuál es el mayor de todos?
		Si i = 1 Entonces
			mayorNum = datos(i)
		FinSi
		Si i >= 2 Entonces
			Si datos(i) > mayorNum Entonces
				mayorNum = datos(i)
			FinSi
		FinSi
		i = i + 1
	FinMientras
	Escribir "Para los datos ingresados:"
	Escribir "Se cuentan con ", pares, " pares."
	Escribir "El mayor numero es ", mayorNum, "."
	//Si el tercero es par, calcular el cuadrado del segundo.
	Si (datos(3) mod 2 = 0) y (datos(3) <> 0) Entonces
		Escribir "Como el tercer numero ", datos(3), " es par, el cuadrado del segundo numero ", datos(2), " es ", datos(2)*datos(2), "."
	FinSi
	//Si el primero es menor que el cuarto, calcular la media de los 4 números
	Si datos(1) < datos(4) Entonces
		promedio = sumanum / 4
		Escribir "Como el primer numero ", datos(1), " es manor al cuarto numero ",datos(4), ", la media de los 4 numeros es ", promedio, "."
	FinSi
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido 
	//entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular 
	//la suma de los 4 números.
	Si (datos(2) > datos(3)) y (datos(3) >= 50) y (datos(3) <= 700) Entonces
		Escribir "Como el segundo numero ", datos(2), " es mayor al tercero ", datos(3), ", y el tercer numero esta entre los valores de 50 y 700, la suma de los 4 numeros es ", sumanum, "."
	FinSi
FinProceso
