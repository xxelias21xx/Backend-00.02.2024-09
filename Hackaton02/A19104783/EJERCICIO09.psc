Proceso AumentoSueldo
	// 9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si 
	//ganaba m�s de $2000 tendr� un aumento del 5%, si generaba menos de $2000 su aumento ser� de un 10%.
	Definir sueldoActual, aumento, nuevoSueldo Como Real
	
    // Solicitar el sueldo actual del trabajador
    Escribir "Ingrese el sueldo actual del trabajador: $"
    Leer sueldoActual
	
    // Calcular el aumento seg�n el sueldo actual
    Si sueldoActual > 2000 Entonces
        aumento <- sueldoActual * 0.05 // Aumento del 5%
    SiNo
        aumento <- sueldoActual * 0.1 // Aumento del 10%
    FinSi
	
    // Calcular el nuevo sueldo
    nuevoSueldo <- sueldoActual + aumento
	
    // Mostrar el resultado
    Escribir "El aumento es de: $", aumento
    Escribir "El nuevo sueldo ser� de: $", nuevoSueldo

FinProceso
