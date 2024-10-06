Proceso Ejercicio32
	//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. 
	Dimension provincias[3]
	Dimension cuidades[11]
	Dimension indiceProvincial[11]
	Dimension poblaciones[11]
	//registro de provincias
	Escribir "Ingrese las Provincias"
	Para i=1 Hasta 3 Con Paso paso Hacer
		Escribir i,"° Provincia: "
		Leer provincias[i]
		i=i+1
	Fin Para
	Limpiar Pantalla
	
	//Registro de cuidades
	Para i<-1 Hasta 11 Con Paso paso Hacer
		//registar cuidad
		Escribir i,"° Cuidad: "
		Leer cuidades[i]
		//registrar poblacion
		Escribir "Poblacion de la cuidad: "
		Leer poblaciones[i]
		//indicar la provincia
		
		Para j=1 Hasta 3 Con Paso paso Hacer
			Escribir " Ingrese: ",j
			Escribir  " Si pertenece a la provincia: ",provincias[j]
			j=j+1
		Fin Para
		prov =0
		Repetir
			Escribir "Indique a que provincia pertenece"
			Leer prov
		Hasta Que prov >0 y prov <4
		Limpiar Pantalla
		indiceProvincial[i]= prov
		i=i+1
	Fin Para
	mayorPoblacion=0
	indiceMayorP=0
	
	Para i=1 Hasta 11 Con Paso paso Hacer
		Escribir "id: ",i, " cuidad: ",cuidades[i] ," poblacion: ",poblaciones[i]
		Si poblaciones[i] > mayorPoblacion Entonces
			mayorPoblacion=poblaciones[i]
			indiceMayorP=i
		Fin Si
		i=i+1
	Fin Para
	
	Escribir "La mayor Poblacion: "
	Escribir "Provincia:  ", provincias[indiceProvincial[indiceMayorP]]
	Escribir "Cuidad:     ", cuidades[indiceMayorP]
	Escribir "Habitantes: ",poblaciones[indiceMayorP]
	
FinProceso
