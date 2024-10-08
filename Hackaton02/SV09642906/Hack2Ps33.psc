Proceso E33
	//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	Definir continuar Como Caracter
    Definir num1, num2, suma Como Real
	
    Repetir
        Escribir "Ingrese el primer número: "
        Leer num1
        Escribir "Ingrese el segundo número: "
        Leer num2
        
        suma <- num1 + num2
        Escribir "La suma es: ", suma
        
        Escribir "¿Desea continuar? (s/n): "
        Leer continuar
    Hasta Que continuar <> "s" Y continuar <> "S"
	
    Escribir "Gracias por usar el programa. ¡Hasta luego!"
Fin Proceso	