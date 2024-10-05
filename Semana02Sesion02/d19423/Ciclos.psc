Proceso Ciclos
	
	
//	Para pasos <- 1 Hasta 10 Con Paso paso Hacer
//		Escribir pasos
//		pasos = pasos + 1
//	Fin Para
	
	
	bandera = Verdadero
	miNumero <- -10
	
	
	escribir bandera
	
	Mientras bandera Hacer
		Escribir miNumero
		miNumero = miNumero + 1
		
		si miNumero == 10 Entonces
			bandera = Falso
		FinSi
	Fin Mientras
	
	Escribir bandera
	
	miNumero = 0
	
	Repetir
		Escribir miNumero
		miNumero = miNumero + 1
		
		si miNumero == 10 Entonces
			bandera = Verdadero
		FinSi
	Hasta Que bandera
	
	
	
	
FinProceso
