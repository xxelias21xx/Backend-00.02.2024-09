Algoritmo ejercicio10
	
	//11.Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Definir num1, num2, num3 Como Entero
	Escribir "Alumnito, escribe tres numeros para saber cual es mayor"
	
	//Solicitar los numeros
	Escribir "Alumnito, Escribe el Primer Numero"
	Leer num1
	Escribir "Alumnito, Escribe el Segundo Numero"
	Leer num2
	Escribir "Alumnito, Escribe el Tercer Numero"
	Leer num3
	
	//Resolviendo el problema expuesto
    Si num1 >= num2 y num1 >= num3 Entonces
        Si num2 >= num3 Entonces
            Escribir "El orden es: ", num1, ", ", num2, ", ", num3
        Sino
            Escribir "El orden es: ", num1, ", ", num3, ", ", num2
        FinSi
    Sino
        Si num2 >= num1 y num2 >= num3 Entonces
            Si num1 >= num3 Entonces
                Escribir "El orden es: ", num2, ", ", num1, ", ", num3
            Sino
                Escribir "El orden es: ", num2, ", ", num3, ", ", num1
            FinSi
        Sino
            Si num1 >= num2 Entonces
                Escribir "El orden es: ", num3, ", ", num1, ", ", num2
            Sino
                Escribir "El orden es: ", num3, ", ", num2, ", ", num1
            FinSi
        FinSi
    FinSi
	
FinAlgoritmo
