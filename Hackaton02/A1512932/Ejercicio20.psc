Algoritmo ejercicio20
	//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	//¿Cuántos números son Pares?
	//¿Cuál es el mayor de todos?
    //Si el tercero es par, calcular el cuadrado del segundo.
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Definir num1, num2, num3, num4 Como Entero
	
	pares = 0
	
	Escribir "Ingrese el primer número entero positivo:"
    Leer num1
    Escribir "Ingrese el segundo número entero positivo:"
    Leer num2
    Escribir "Ingrese el tercer número entero positivo:"
    Leer num3
    Escribir "Ingrese el cuarto número entero positivo:"
    Leer num4
	
	//¿Cuántos números son Pares?
	Si num1 % 2 == 0 Entonces
        pares = pares + 1
    Fin Si
    Si num2 % 2 == 0 Entonces
        pares = pares + 1
    Fin Si
    Si num3 % 2 == 0 Entonces
        pares = pares + 1
    Fin Si
    Si num4 % 2 == 0 Entonces
        pares = pares + 1
    Fin Si
	
	//¿Cuál es el mayor de todos?
	mayor = num1 
    Si num2 > mayor Entonces
        mayor = num2
    Fin Si
    Si num3 > mayor Entonces
        mayor = num3
    Fin Si
    Si num4 > mayor Entonces
        mayor = num4
    Fin Si
	
	//Si el tercero es par, calcular el cuadrado del segundo.
    Si num3 % 2 == 0 Entonces
        Escribir "El cuadrado del segundo número es: ", num2 * num2
    Fin Si
	
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
        Escribir "La media de los 4 números es: ", media
    Fin Si
	
    //Si el segundo es mayor que el tercero,
    Si num2 > num3 Entonces
		//verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
        Si num3 >= 50 y num3 <= 700 Entonces
            suma = num1 + num2 + num3 + num4
            Escribir "La suma de los 4 números es: ", suma
        Fin Si
    Fin Si
	
    
    Escribir "El mayor de todos los números es: ", mayor
	Escribir "Cantidad de números pares: ", pares
    

	
FinAlgoritmo
