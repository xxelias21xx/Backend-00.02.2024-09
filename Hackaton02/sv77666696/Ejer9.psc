Algoritmo Aumento_Salarial
	
    Definir salario_actual, aumento, nuevo_salario Como Real
	
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario_actual
	
 
    Si salario_actual > 2000 Entonces
        aumento <- salario_actual * 0.05 
    Sino
        aumento <- salario_actual * 0.10  
    FinSi
	
    nuevo_salario <- salario_actual + aumento
	
    Escribir "El aumento es de: $", aumento
    Escribir "El nuevo salario del trabajador es: $", nuevo_salario
	
FinAlgoritmo
