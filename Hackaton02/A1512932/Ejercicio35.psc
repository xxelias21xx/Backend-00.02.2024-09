Algoritmo Ejercicio35
	//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
    mayor = -999999
    menor = 999999
	
    Para i Desde 1 Hasta 4 Hacer
        Escribir "Ingrese un número:"
        Leer num
		
        Si num > mayor Entonces
            mayor = num
        Fin Si
		
        Si num < menor Entonces
            menor = num
        Fin Si
    Fin Para
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
Fin Algoritmo