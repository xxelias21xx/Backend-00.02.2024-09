Algoritmo cocinarHuevo
	
    Escribir "¿Cliente desea huevo frito? (si/no)"
    Leer entrada
    
    Si entrada = "si" Entonces
        Escribir "¿Deseas el huevo salado? (si/no)"
        Leer salado
        Si salado = "si" Entonces
            Escribir "Estimado Cliente, disfrute su huevo frito con sal."
        SiNo
            Escribir "Estimado Cliente, disfrute su huevo frito sin sal."
        FinSi
    SiNo
		Si entrada = "no" entonces
			Escribir "¿Deseas el huevo salado? (si/no)"
			Leer salado
			Si salado = "si" Entonces
				Escribir "Estimado Cliente, disfrute su huevo frito con sal."
			SiNo
				Escribir "Estimado Cliente, disfrute su huevo frito sin sal."
			FinSi
        FinSi
		
    FinSi
	
FinAlgoritmo
